import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from '../ReactOnClick/router-data';
import { materialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';
import { basicSelectRouterMetaData } from './BasicSelect/router-data';
import { useEffectsRouterMetaData } from './UseEffects/router-data';
import { reactUseRefRouterMetaData } from './ReactUseRef/router-data';
import { reactUseRefExRouterMetaData } from './ReactUseRefEx/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  materialUIBasicElementsRouterMetaData,
  basicSelectRouterMetaData,
  useEffectsRouterMetaData,
  reactUseRefRouterMetaData,
  reactUseRefExRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
