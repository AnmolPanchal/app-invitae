import React from 'react';
import DNA from './DNA';
import DNAHeaders from './DNAHeaders';
import { Table } from 'react-bootstrap';

const DNAList = props => { 
    let dnas, headers;
    if (props.data && props.data.length > 0) 
        dnas = props.data.map(dna => <DNA data={dna} key={dna['Chr']} />)

    headers = dnas ? <DNAHeaders /> : <thead></thead>

  return(
    <Table className="dna-table fadein" bordered condensed hover>
        {headers}        
        <tbody>
           {dnas} 
        </tbody>
    </Table>
  );
}

export default DNAList;
