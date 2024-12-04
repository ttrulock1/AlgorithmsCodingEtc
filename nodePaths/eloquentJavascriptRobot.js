const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

    //you do not capitalize "function";edges is plural
    //easy things.
    //remember graph = Object.create(null) at the beginning
    //return graph
function buildGraph(edges){
    let graph = Object.create(null)
    function addEdge(from,to){
        if(from in graph){
            graph[from].push(to)
        }else{
            graph[from].to
        }
        let from= to,from
    }
    
    //you got map right, remember the edges.
    //remember this part of it: for(let [from,to] of edges.map)
    //split makes the roads readable

    for(let [from,to] of edges.map(edges=>edges.split('-'))){
        //you have to get the from and two somewhere; this allows both of these to be from and too. 
        addEdge(from,to);
        addEdge(to, from);
    }
    return graph
}

const roadGraph = buildGraph(roads);


class VillageState{

    .move
}