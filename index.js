#!/usr/bin/env node

import boxen from "boxen";
function KingsInfo() {
    const header = `
\x1b[38;5;208m  ██╗  ██╗    ██╗ ███████╗ ██╗       ██████╗  ██████╗  ███╗   ███╗ ███████╗  ██╗ \x1b[0m
\x1b[38;5;208m  ██║  ██║    ██║ ██╔════╝ ██║      ██╔════╝ ██╔═████╗ ████╗ ████║ ██╔════╝  ██║ \x1b[0m
\x1b[37;5;25m  ██║  ██║ █╗ ██║ █████╗   ██║      ██║      ██║██╔██║ ██╔████╔██║ █████╗    ██║  \x1b[0m
\x1b[37;5;25m  ╚═╝  ██║███╗██║ ██╔══╝   ██║      ██║      ████╔╝██║ ██║╚██╔╝██║ ██╔══╝    ╚═╝  \x1b[0m
\x1b[38;5;46m  ██╗  ╚███╔███╔╝ ███████╗ ███████╗ ╚██████╗ ╚██████╔╝ ██║ ╚═╝ ██║ ███████╗  ██╗  \x1b[0m
\x1b[38;5;46m  ╚═╝   ╚══╝╚══╝  ╚══════╝ ╚══════╝   ╚════╝  ╚═════╝  ╚═╝     ╚═╝ ╚══════╝  ╚═╝  \x1b[0m
`;  

    const intro = "Hi Guys,🤓 I'm Kingshuk Mondal, Developer from Kolkata, India.";

    const work = "Currently, I'm pursuing B.Tech in Computer Science and learning about new innovations.";
    
    const intrest = "Besides Coding, I love to read crime-based detective stories, write poetry, and draw paintings.";
    
    const github = "https://github.com/Kings-Mon";
    
    const twitter = "https://x.com/Kings_Mon";
    
    const linkedin = "https://www.linkedin.com/in/kingshuk-mondal-711361255";
    
    const insta = "https://www.instagram.com/different_perspective_007";
    
    const fb = "https://www.facebook.com/kingshuk.mondal.5015";
    
    const email = "kingshukmon007@gmail.com";
    
    const contact = "If you want to connect with me, follow me on my social accounts or just drop an email at kingshukmon007@gmail.com";
    
    const bye = "Thank You for visiting my npm package. Have a nice day!!😇";

    const message = `
${header}
\x1b[38;5;196m${intro}
\x1b[38;5;46m${work}
\x1b[37;5;25m${intrest}

\x1b[96;5;24mTwitter:\x1b[0m \x1b[38;5;51m${twitter}
\x1b[94;5;24mLinkedIn:\x1b[0m \x1b[38;5;25m${linkedin}
\x1b[90;5;240mGitHub:\x1b[0m \x1b[31;5;25m${github}
\x1b[94;5;24mFacebook:\x1b[0m \x1b[38;5;25m${fb}
\x1b[95;5;240mInstagram:\x1b[0m \x1b[38;5;25m${insta}
\x1b[38;5;205mEmail:\x1b[0m \x1b[37;5;25m${email}

\x1b[38;5;208m${contact}\x1b[0m
\x1b[93;5;25m${bye}\x1b[0m
`;

    const boxedMessage = boxen(message, { title: 'Kingshuk Mondal', titleAlignment: 'center', margin : 1, padding: 1, borderStyle: 'bold', borderColor: 'green' });
    console.log(boxedMessage);
}

KingsInfo();
