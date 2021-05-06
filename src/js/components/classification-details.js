import React from 'react';
import Correspondences from './correspondences';
import Levels from './levels';
import ClassificationDetailsPane from './classification-details-pane';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADED } from 'sparql-connect';
import { connectFromRoute } from '../router-mapping';
import Loading from './loading.js';

function ClassificationDetails({
  loaded,
  classification,
  code,
  label,
  issued,
}) {
  //let details
  if (loaded !== LOADED)
    return <Loading from="Classification" plural={false} />;

  return (
    <div>
      <h1>{label}</h1>
      <ClassificationDetailsPane
        loaded={loaded}
        code={code}
        label={label}
        issued={issued}
      />
      <Correspondences classification={classification} />
      <Levels classification={classification} />
    </div>
  );
}

export default connectFromRoute(
  sparqlConnect.classificationDetails(ClassificationDetails)
);
