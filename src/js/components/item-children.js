import React from 'react';
import { sparqlConnect } from '../sparql/configure-sparql';
import { LOADED } from 'sparql-connect';
import Loading from './loading';
import { Link } from 'react-router';
import { uriToLink } from '../router-mapping';
import Export from './export.js';

function ItemChildren({ item, loaded, items }) {
  if (loaded !== LOADED) return <Loading from="Item children" plural={false} />;
  return (
    <span>
      <h1>
        <Export dataToExport={items} name="export" />
      </h1>
      <ul className="list-group">
        {items.map(({ item, code, label }) => (
          <li key={item} className="list-group-item">
            <Link to={uriToLink.itemDetails(item)}>
              {code} - {label}
            </Link>
          </li>
        ))}
      </ul>
    </span>
  );
}
export default sparqlConnect.itemChildren(ItemChildren);
