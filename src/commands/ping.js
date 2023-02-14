import { SlashCommandBuilder } from '@discordjs/builders';

const badgeRegisterCommand = new SlashCommandBuilder()
  .setName('badgeregistercommand')
  .setDescription('register thing');

export default badgeRegisterCommand.toJSON();
