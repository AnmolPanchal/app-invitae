import React from 'react';

const DNA = props => { 
    let result = props.data;
    return (
        <tr>
            <td>{result['Gene'] || '-'}</td>
            <td>{result['Nucleotide Change'] || '-'}</td>
            <td>{result['Protein Change'] || '-'}</td>
            {/* <td>{result['Other Mappings']}</td> */}
            <td>{result['Alias'] || '-'}</td>
            <td>{result['Transcripts Region'] || '-'}</td>
            <td>{result['Reported Classification'] || '-'}</td>
            {/* <td>{result['Inferred Classification']}</td>
            <td>{result['Source']}</td> */}
            <td>{result['Last Evaluated'] || '-'}</td>
            <td>{result['Last Updated'] || '-'}</td>
            {/* <td>{result['URL Submitter']}</td>
            <td>{result['Comment']}</td>
            <td>{result['Assembly']}</td>
            <td>{result['Chr']}</td>
            <td>{result['Genomic Start']}</td>
            <td>{result['Genomic Stop']}</td>
            <td>{result['Ref Alt Accession']}</td>
            <td>{result['Reported Ref']}</td>
            <td>{result['Reported Alt']}</td> */}
        </tr>
    )
}

export default DNA;