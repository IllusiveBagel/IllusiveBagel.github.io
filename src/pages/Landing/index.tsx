import { useEffect } from 'react';
import { CanvasSpace, Form, Line, Vector, Const } from 'ptjs';

import styles from './Landing.module.scss';

const LandingPage = () => {
    useEffect(() => {
        floatySpace();
        window.addEventListener('resize', floatySpace);

        return function cleanup() {
            window.removeEventListener('resize', floatySpace);
        };
    }, []);

    const floatySpace = () => {
        let space;
        var colors = [
            '#d33682',
            '#268bd2',
            '#2aa198',
            '#b58900',
            '#cb4b16',
            '#dc322f',
            '#6c71c4',
            '#859900',
        ];

        space = new CanvasSpace('canvas').setup({ bgcolor: '#002b36' });
        var form = new Form(space);

        // Elements
        var pts: Float32Array[] = [];
        var center = space.size.$divide(1.8);
        var angle = -(window.innerWidth * 0.5);
        var count = window.innerWidth * 0.05;
        if (count > 150) count = 150;
        var line = new Line(0, angle).to(space.size.x, 0);
        var mouse = center.clone();

        var r = Math.min(space.size.x, space.size.y) * 1;
        for (var i = 0; i < count; i++) {
            var p: any = new Vector(
                Math.random() * r - Math.random() * r,
                Math.random() * r - Math.random() * r
            );
            p.moveBy(center).rotate2D((i * Math.PI) / count, center);
            p.brightness = 0.1;
            pts.push(p);
        }

        // Canvas
        space.add({
            animate: () => {
                for (var i = 0; i < pts.length; i++) {
                    // rotate the points slowly
                    var pt: any = pts[i];

                    pt.rotate2D(Const.one_degree / 20, center);
                    form.stroke(false)
                        .fill(colors[i % 8])
                        .point(pt, 1);

                    // get line from pt to the mouse line
                    var ln = new Line(pt).to(
                        line.getPerpendicularFromPoint(pt)
                    );

                    // opacity of line derived from distance to the line
                    var distFromMouse = Math.abs(
                        ln.getDistanceFromPoint(mouse)
                    );

                    if (distFromMouse < 50) {
                        if (pt.brightness < 0.3) pt.brightness += 0.015;
                    } else {
                        if (pt.brightness > 0.1) pt.brightness -= 0.01;
                    }

                    var color = 'rgba(255,255,255,' + pt.brightness + ')';
                    form.stroke(color).fill(true).line(ln);
                }
            },

            onMouseAction: (type: string, x: number, y: number) => {
                if (type === 'move') {
                    mouse.set(x, y);
                }
            },
        });

        space.bindMouse();
        space.play();
    };

    return (
        <div id="pt" className={styles.canvas}>
            <canvas
                id="canvas"
                style={{ width: '1920px', height: '1142px' }}
            ></canvas>
        </div>
    );
};

export default LandingPage;
