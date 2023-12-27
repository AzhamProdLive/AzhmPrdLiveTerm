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
  return args
    .join(' ')
    .replace(
      /<(?:(?:(?:(script|style|object|embed|applet|noframes|noscript|noembed)(?:\s+(?:"[\S\s]*?"|'[\S\s]*?'|(?:(?!\/>)[^>])?)+)?\s*>)[\S\s]*?<\/\1\s*(?=>))|(?:\/?[\w:]+\s*\/?)|(?:[\w:]+\s+(?:"[\S\s]*?"|'[\S\s]*?'|[^>]?)+\s*\/?)|\?[\S\s]*?\?|(?:!(?:(?:DOCTYPE[\S\s]*?)|(?:\[CDATA\[[\S\s]*?\]\])|(?:--[\S\s]*?--)|(?:ATTLIST[\S\s]*?)|(?:ENTITY[\S\s]*?)|(?:ELEMENT[\S\s]*?))))>/g,
      '',
    );
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const mkdir = async (args: string[]): Promise<string> => {
  if (args.length >= 1) {
    return `You can't create the folder ${args.join(
      ' ',
    )} as this terminal is not a real terminal !`;
  } else {
    return `You can't create a folder here, as this terminal is not a real terminal !`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Invalid number of arguments! Usage: cd [folder]`;
  }
  const folderName = args[0];
  switch (folderName) {
    case 'Kandar':
      window.open(`${config.repolinks.repofriend}`);
      return 'Opening Kandar Folder...';
    case 'Dotfiles':
      window.open(`${config.repolinks.repodotfiles}`);
      return 'Opening Dotfiles Folder...';
    case 'UsefulBox':
      window.open(`${config.repolinks.repobox}`);
      return 'Opening Useful Box Folder...';
    case 'repo':
      window.open(`${config.repolinks.repo}`);
      return 'Opening Github repository...';
    // Need to modify with case args to add more folders
    default:
      return `The folder ${folderName} doesn't exist!`;
  }
};

export const ls = async (args: string[]): Promise<string> => {
  return (
    `🗀 Kandar` + '\n' + `🗀 Dotfiles` + '\n' + `🗀 UsefulBox` + '\n' + `🗀 repo`
  );
};

export const lsblk = async (args: string[]): Promise<string> => {
  // Mocked block device information
  const blockDevices = [
    {
      name: 'Seagate Samsung SATA HDD',
      size: '1TB',
      mountpoint: null,
      children: [],
    },
    {
      name: 'Samsung NVMe SSD 980',
      size: '1TB',
      mountpoint: null,
      children: [],
    },
    {
      name: 'Unnamed Samsung SSD Drive',
      size: '500GB',
      mountpoint: null,
      children: [],
    },
  ];

  // Helper function to recursively build the lsblk-like output
  const buildOutput = (device: any, depth: number): string => {
    const prefix = ' '.repeat(depth * 2);
    let output = `${prefix}${device.name.padEnd(30)}${device.size.padEnd(8)}${
      device.mountpoint || ''
    }\n`;

    for (const child of device.children) {
      output += buildOutput(child, depth + 1);
    }

    return output;
  };

  // Format the output with "Available disks:" line
  const output = `Available disks:\n${blockDevices
    .map((device) => buildOutput(device, 0))
    .join('')}`;

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
