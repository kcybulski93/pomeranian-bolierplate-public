import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { boxModelRouterMetaData } from './BoxModel/router-data';
import { colorsRouterMetaData } from './Colors/router-data';
import { cssAnimationsRouterMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { mediaFilesRouterMetaData } from './MediaFiles/router-data';
import { StandardTagsRouterMetaData } from './StandardTags/router-data';
import { TextFundamentsRouterMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  TextFundamentsRouterMetaData,
  StandardTagsRouterMetaData,
  cssAnimationsRouterMetaData,
  colorsRouterMetaData,
  imageFilesRouterMetaData,
  mediaFilesRouterMetaData,
  boxModelRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
