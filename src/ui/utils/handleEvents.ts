import { EventHandler, SyntheticEvent } from 'react';


export const handleEvents = (...args: (EventHandler<SyntheticEvent<any>> | undefined)[]) => (event: SyntheticEvent) => {
  args.forEach(fn => fn && fn(event));
};
