import React from 'react'
import { connectFromRoute } from '../router-mapping'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import Loading from './loading'
import { Link } from 'react-router'
import { uriToLink } from '../router-mapping'
import ItemChildren from './item-children'
import Menu from './menu'

function ItemDetails({ loaded, item, label, code, text, parent, parentCode,
    parentLabel, cl, clCode, clLabel }) {
  if (loaded !== LOADED) return  <Loading from="Item details" plural={false} />
  return (
    <div>
      <Menu />
      <Link to={uriToLink.classificationDetails(cl)}>
        { clCode } - { clLabel }
      </Link>
      <h1>{code} - {label}</h1>
      
      { parent && 
        <Link to={uriToLink.itemDetails(parent)}>
          <span>&#x2191;&nbsp;</span>{ parentCode } - { parentLabel }
        </Link>
      }
      { text && <div className="note">{text}</div> }
      <hr/>
      <ItemChildren item={item} />
    </div>
  )
}

export default connectFromRoute(sparqlConnect.itemDetails(ItemDetails))