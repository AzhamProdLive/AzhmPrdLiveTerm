// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'readme' - my github readme.
'repo' - my github repository.`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repolinks.repo}`);
  return 'Opening Github repository...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

export const qwant = async (args: string[]): Promise<string> => {
  window.open(`https://www.qwant.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ').replace( /<(?:(?:(?:(script|style|object|embed|applet|noframes|noscript|noembed)(?:\s+(?:"[\S\s]*?"|'[\S\s]*?'|(?:(?!\/>)[^>])?)+)?\s*>)[\S\s]*?<\/\1\s*(?=>))|(?:\/?[\w:]+\s*\/?)|(?:[\w:]+\s+(?:"[\S\s]*?"|'[\S\s]*?'|[^>]?)+\s*\/?)|\?[\S\s]*?\?|(?:!(?:(?:DOCTYPE[\S\s]*?)|(?:\[CDATA\[[\S\s]*?\]\])|(?:--[\S\s]*?--)|(?:ATTLIST[\S\s]*?)|(?:ENTITY[\S\s]*?)|(?:ELEMENT[\S\s]*?))))>/g,"");
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const mkdir = async (args: string[]): Promise<string> => {
  if (args.length >= 1) {
    return `You can't create the folder ${args.join(' ')} as this terminal is not a real terminal !`;
  }
  else {
        return `You can't create a folder here, as this terminal is not a real terminal !`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Invalid number of arguments! Usage: cd [folder]`;
  }
      const folderName = args[0];
   switch (folderName) { 
      case "Kandar":
        window.open(`${config.repolinks.repofriend}`);
        return 'Opening Kandar Folder...';
      case "Dotfiles":
        window.open(`${config.repolinks.repodotfiles}`);
        return 'Opening Dotfiles Folder...';
      case "UsefulBox":
        window.open(`${config.repolinks.repobox}`);
        return 'Opening Useful Box Folder...';
      case "repo":
        window.open(`${config.repolinks.repo}`);
        return 'Opening Github repository...';
      // Need to modify with case args to add more folders
      default:
        return `The folder ${folderName} doesn't exist!`
  }
};

export const ls = async (args: string[]): Promise<string> => {
  return `🗀 Kandar` + '\n' + `🗀 Dotfiles` + '\n' + `🗀 UsefulBox` + '\n' + `🗀 repo`;
};

export const lsblk = async (args: string[]): Promise<string> => {
  // Mocked block device information
  const blockDevices = [
    { name: 'sda', size: '256G', type: 'disk', mountpoint: '/mnt/sda1' },
    { name: 'sdb', size: '1T', type: 'disk', mountpoint: null },
    { name: 'sdb1', size: '512M', type: 'part', mountpoint: '/boot' },
    { name: 'sdb2', size: '512G', type: 'part', mountpoint: '/' },
    // Add more devices as needed
  ];

  // Format the output to resemble the lsblk command
  const output = blockDevices.map(device => {
    return `${device.name} ${device.size} ${device.type} ${device.mountpoint || ''}`;
  }).join('\n');

  return output;
};



// Banner
export const banner = (args?: string[]): string => {
  return `
 █████╗ ███████╗██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗ █████╗ ██╗  ██╗███████╗███████╗████████╗██████╗  █████╗ ███████╗██╗  ██╗
██╔══██╗╚══███╔╝██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔══██╗██║ ██╔╝██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║  ███╔╝ ███████║███████║██╔████╔██║██╔████╔██║███████║█████╔╝ █████╗  ███████╗   ██║   ██████╔╝███████║███████╗███████║
██╔══██║ ███╔╝  ██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══╝  ╚════██║   ██║   ██╔══██╗██╔══██║╚════██║██╔══██║
██║  ██║███████╗██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║  ██╗███████╗███████║   ██║   ██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                                                                                               

Welcome to my website!
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repolinks.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
