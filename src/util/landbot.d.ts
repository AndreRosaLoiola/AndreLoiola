// types/landbot.d.ts
declare module "landbot" {
  export interface LivechatConfig {
    configUrl: string;
  }

  export class Livechat {
    constructor(config: LivechatConfig);
  }

  export const Landbot: {
    Livechat: typeof Livechat;
  };
}
