import { type IconComponent, type IconComponentProps } from 'twenty-ui/icon';
import {
  type CommandMenuItemFieldsFragment,
  EngineComponentKey,
} from '~/generated-metadata/graphql';

export type CommandMenuItemColor =
  | 'neutral'
  | 'danger'
  | 'create'
  | 'restore'
  | 'data'
  | 'ai'
  | 'favorite'
  | 'communication'
  | 'warning';

const COLOR_BY_ENGINE_COMPONENT_KEY: Partial<
  Record<EngineComponentKey, CommandMenuItemColor>
> = {
  [EngineComponentKey.DELETE_SINGLE_RECORD]: 'danger',
  [EngineComponentKey.DELETE_MULTIPLE_RECORDS]: 'danger',
  [EngineComponentKey.DELETE_RECORDS]: 'danger',
  [EngineComponentKey.DESTROY_SINGLE_RECORD]: 'danger',
  [EngineComponentKey.DESTROY_MULTIPLE_RECORDS]: 'danger',
  [EngineComponentKey.DESTROY_RECORDS]: 'danger',
  [EngineComponentKey.DISCARD_DRAFT_WORKFLOW]: 'danger',
  [EngineComponentKey.CANCEL_MESSAGE_CAMPAIGN]: 'danger',
  [EngineComponentKey.STOP_WORKFLOW_RUN]: 'danger',

  [EngineComponentKey.CREATE_NEW_RECORD]: 'create',
  [EngineComponentKey.CREATE_NEW_VIEW]: 'create',
  [EngineComponentKey.ADD_NODE_WORKFLOW]: 'create',
  [EngineComponentKey.DUPLICATE_DASHBOARD]: 'create',
  [EngineComponentKey.DUPLICATE_MESSAGE_CAMPAIGN]: 'create',
  [EngineComponentKey.DUPLICATE_MESSAGE_LIST]: 'create',
  [EngineComponentKey.DUPLICATE_WORKFLOW]: 'create',

  [EngineComponentKey.RESTORE_SINGLE_RECORD]: 'restore',
  [EngineComponentKey.RESTORE_MULTIPLE_RECORDS]: 'restore',
  [EngineComponentKey.RESTORE_RECORDS]: 'restore',
  [EngineComponentKey.ACTIVATE_WORKFLOW]: 'restore',
  [EngineComponentKey.RETRY_WORKFLOW_RUN]: 'restore',

  [EngineComponentKey.IMPORT_RECORDS]: 'data',
  [EngineComponentKey.EXPORT_FROM_RECORD_INDEX]: 'data',
  [EngineComponentKey.EXPORT_FROM_RECORD_SHOW]: 'data',
  [EngineComponentKey.EXPORT_MULTIPLE_RECORDS]: 'data',
  [EngineComponentKey.EXPORT_NOTE_TO_PDF]: 'data',
  [EngineComponentKey.EXPORT_RECORDS]: 'data',
  [EngineComponentKey.EXPORT_VIEW]: 'data',

  [EngineComponentKey.ASK_AI]: 'ai',
  [EngineComponentKey.NEW_AI_CHAT]: 'ai',
  [EngineComponentKey.VIEW_PREVIOUS_AI_CHATS]: 'ai',
  [EngineComponentKey.ASSIGN_AI_CHAT]: 'ai',

  [EngineComponentKey.ADD_TO_FAVORITES]: 'favorite',
  [EngineComponentKey.REMOVE_FROM_FAVORITES]: 'favorite',

  [EngineComponentKey.COMPOSE_EMAIL]: 'communication',
  [EngineComponentKey.REPLY_TO_EMAIL_THREAD]: 'communication',
  [EngineComponentKey.COMPOSE_CAMPAIGN]: 'communication',
  [EngineComponentKey.SEND_MESSAGE_CAMPAIGN]: 'communication',
  [EngineComponentKey.SEND_MESSAGE_CAMPAIGN_TEST]: 'communication',
  [EngineComponentKey.SHARE_RECORD]: 'communication',

  [EngineComponentKey.DEACTIVATE_WORKFLOW]: 'warning',
  [EngineComponentKey.MERGE_MULTIPLE_RECORDS]: 'warning',
};

// Step 9 of each colour scale: muted enough to stay calm next to the grey
// icons, and it adapts to dark mode like the rest of the theme
const ICON_COLOR_BY_COLOR: Record<CommandMenuItemColor, string | undefined> = {
  neutral: undefined,
  danger: 'var(--t-color-red9)',
  create: 'var(--t-color-blue9)',
  restore: 'var(--t-color-mint9)',
  data: 'var(--t-color-turquoise9)',
  ai: 'var(--t-color-violet9)',
  favorite: 'var(--t-color-pink9)',
  communication: 'var(--t-color-sky9)',
  warning: 'var(--t-color-amber9)',
};

// Destructive actions read red, and other significant actions get a soft
// colour on their icon so they stand out from the neutral grey ones
export const getCommandMenuItemColor = ({
  engineComponentKey,
}: Pick<
  CommandMenuItemFieldsFragment,
  'engineComponentKey'
>): CommandMenuItemColor =>
  COLOR_BY_ENGINE_COMPONENT_KEY[engineComponentKey] ?? 'neutral';

const coloredIconCache = new Map<string, Map<IconComponent, IconComponent>>();

export const getCommandMenuItemColoredIcon = (
  Icon: IconComponent,
  color: CommandMenuItemColor,
): IconComponent => {
  const iconColor = ICON_COLOR_BY_COLOR[color];

  if (iconColor === undefined) {
    return Icon;
  }

  const iconsForColor =
    coloredIconCache.get(iconColor) ?? new Map<IconComponent, IconComponent>();
  coloredIconCache.set(iconColor, iconsForColor);

  const cachedIcon = iconsForColor.get(Icon);

  if (cachedIcon !== undefined) {
    return cachedIcon;
  }

  const ColoredIcon = ({ style, ...props }: IconComponentProps) => (
    <Icon {...props} color="currentColor" style={{ ...style, color: iconColor }} />
  );

  iconsForColor.set(Icon, ColoredIcon);

  return ColoredIcon;
};
