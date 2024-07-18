import ast from '../assets/images/ast.svg';
import supplypoint from '../assets/images/supplypoint.svg';
import toob from '../assets/images/toob.svg';
import northsails from '../assets/images/northsails.svg';
import dootrix from '../assets/images/dootrix.svg';
import mivoice from '../assets/images/mivoice.svg';
import autoprotect from '../assets/images/autoprotect.svg';

export default [
    {
        company: 'AST Group',
        position: 'Software Tester',
        startDate: 'Jun 2016',
        endDate: 'Sep 2017',
        description: (
            <p>
                My first role was at AST and was part of an appreticeship. I was
                hired at AST primarily as a software tester but while working at
                AST I undertook 2 roles, As mentioned the main role was testing
                the software but the secondary role was as a network engineer. I
                was responsible for maintaining all of the in house servers that
                were used for the software such as dev and test servers.
                <br />
                <br />
                While working at AST I worked very closely with the developers
                who helped me get started with software development. An extra
                task I took on was creating unit tests in C# to help speed up
                the process. Alongside the unit tests I was also developing
                automated UI tests using the Selenium framework and Python which
                offered a unique and helpful system for end-to-end testing that
                didn't require too many man hours each time a release was ready.
                <br />
                <br />
                IRIS is a solution AST offer that I spent most of my time
                working with, IRIS is an asset tracking software that allows to
                accurately track and communicate with satellite tracking device.
                The requirement to test if different devices worked with the
                system meant that I gained a strong understanding of how these
                devices worked. The knowledge gained on these devices and how
                they communicate has given me unique knowledge on how different
                network types function and how data is transfered using them.
            </p>
        ),
        logo: ast,
    },
    {
        company: 'SupplyPoint',
        position: 'Junior Developer',
        startDate: 'Sep 2017',
        endDate: 'May 2019',
        description: (
            <p>
                I joined SupplyPoint as a junior full-stack developer and mainly
                helped with bug fixes in a couple different REST API's when I
                first started. This was a valuable learning point for me as it
                gave me the foundation knowledge on how to effectively work in a
                software team. It also helped me gain the skills needed to work
                on code that I havent written.
                <br />
                <br />
                After working with SupplyPoint for a few months I was given the
                task of redesigning the UI that is used on the machines they
                produced. This offered a great oppurtunity to use the React
                knowledge I had been gaining in my personal time. I suggested
                React to the team and everyone seemed keen to use it so the new
                UI used React as it's foundation and was built into a windows
                desktop application using Electron.
                <br />
                <br />
                With SupplyPoint being my first role as a developer I feel like
                it was a very important step in helping me move my career
                forward. This is also where I started to use a lot of the
                technologies that I now specialise in.
            </p>
        ),
        logo: supplypoint,
    },
    {
        company: 'toob',
        position: 'Application Systems Specialist',
        startDate: 'May 2019',
        endDate: 'Jul 2020',
        description: (
            <p>
                I joined toob as an Application Systems Specialist which to
                start with meant I was responsible for a variety of things. Toob
                was a start up and I joined quite early in the hiring process.
                My main responsibilities was creating and maintaining extensions
                to a 3rd party software used to manage the network and
                customers. These extensions were built in C# and Javascript.
                <br />
                <br />
                Along side my main priorities I also helped intigrate the ACS
                used to remotely manage customer CPE which allowed the support
                staff to offer a better service to the customer. Along with the
                ACS I also built an extension for the management software that
                allowed the ACS to be used directly from the management software
                meaning the support staff could offer full support from a single
                page rather than having to move between different sites.
                <br />
                <br />
                At toob I played a big role in the design process working
                closely with management and the support staff to ensure the
                software effectively fit the purpose and it's different use
                cases. This was the first role where I played a big part in the
                design process so I gained a lot of useful knowledge about how
                to consider the client.
            </p>
        ),
        logo: toob,
    },
    {
        company: 'North Sails',
        position: 'Junior Developer',
        startDate: 'Oct 2020',
        endDate: 'Aug 2021',
        description: (
            <p>
                My role at North Sails was as a Full Stack developer helping
                build and maintain an internal sales and stock management
                system. This system was built with a C# and .NET Core REST API
                and a ReactJS Front End using MaterialUI. When I joined the
                company the REST API was built in VB so a lot of my time was
                spent converting this to the more modern .NET Core version. I
                was also given the task of converting a lot of old pages from a
                large mix of technologies to use React and create a few new
                pages to expand functionality.
                <br />
                <br />
                With the North Sails development team being made up of myself
                and 1 other person there was lots of oppurtunity for me to play
                a part in the design of the software as well as the actual
                development of it so while at North Sails I helped plan and
                prototype interesting projects such as a mobile app for scanning
                QR codes to help stock management in the production process of
                the sails.
                <br />
                <br />
                At North Sails I picked up some valuable skills such as the
                ability to refactor other peoples code in a logical and thought
                out way to ensure all bases are covered. North Sails was also my
                first role where I could apply my Typescript knowledge so I was
                able to take what I knew and use it in a professional
                environment. While at North Sails I also became more proficient
                at displaying large amounts of data in a user friendly way.
            </p>
        ),
        logo: northsails,
    },
    {
        company: 'Dootrix',
        position: 'Software Engineer',
        startDate: 'Aug 2021',
        endDate: 'Oct 2021',
        description: <></>,
        logo: dootrix,
    },
    {
        company: 'MI-Voice',
        position: 'Software Developer',
        startDate: 'Nov 2021',
        endDate: 'Mar 2022',
        description: <></>,
        logo: mivoice,
    },
    {
        company: 'AutoProtect',
        position: 'Frontend Developer',
        startDate: 'May 2022',
        endDate: 'Present',
        description: <></>,
        logo: autoprotect,
    },
];
