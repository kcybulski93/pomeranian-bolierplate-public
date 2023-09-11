import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { JsNumbersRouterMetaData } from './JsNumbers/router-data';
import { mathExerciseRouterMetaData } from './MathExercise/router-data';
import { jsNumbersTrainingRouterMetaData } from './JsNumbersTraining/router-data';
import { jsStringCodingRouterMetaData } from './JsStringCoding/router-data';
import { jsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { jsStringConversionRouterMetaData } from './JsStringConversion/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  JsNumbersRouterMetaData,
  mathExerciseRouterMetaData,
  jsNumbersTrainingRouterMetaData,
  jsStringCodingRouterMetaData,
  jsStringTrainingRouterMetaData,
  jsStringConversionRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
