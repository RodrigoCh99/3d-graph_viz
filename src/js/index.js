/* =============================== hello world =================================
import '../css/styles.scss';
import img from '../assets/solid.jpg';

const textComponent = () => {
    const elH1 = document.createElement('h1');
    elH1.innerHTML = 'Olá! leia o console!'
    elH1.classList.add('title');
    return elH1;
}

const imgComponent = () => {
    const elImg = new Image(300, 150);
    elImg.src = img;
    return elImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());
*/

/*
import ForceGraph3D from '3d-force-graph';

// código de referaencia para usar um json no próximo grafo
// https://github.com/vasturiano/3d-force-graph/blob/master/example/large-graph/index.html

console.log('aqui começa o debug do console!')

// Random tree
const N = 3000;
const gData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};

console.log('gData')
console.log(gData.nodes)

const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .graphData(gData);
*/
 

// =========================================================================================
/* QUERY PARA OS NÓS DO GRAFO
MATCH p=(node_a)-[r:works_with_60]-() 
RETURN DISTINCT ID(node_a) AS id, 
                node_a.secret_id AS secret_id, 
                node_a.current_alias AS current_alias
*/ 

/* QUERY PARA OS links DO GRAFO
MATCH p=()-[r:works_with_60]-() 
RETURN ID(startNode(r)) AS source, ID(endNode(r)) as target
*/ 

// =========================================================================================

import ForceGraph3D from '3d-force-graph';
const links = require('../../data/links_1960.json');
const nodes = require('../../data/nodes_1960.json');

console.log(nodes)
console.log(links)


const gData = {
  nodes: nodes,
  links: links
};

console.log(gData)

const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .graphData(gData)
    .nodeLabel('secret_id')
    .nodeAutoColorBy('group')







