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
    constuctor(place,parcles){
        this.place=place;
        this.parcles=parcels
    }

    move(destination){
        if(!roadGraph[this.place].includes()){
        return this
        }else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p =>p.place != p.address);
            return new VillageState(destination, parcels)
        }
    }
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);

let next = first.move("Alice's House")

//Data structures that don't change are called immutable or persistent. 
// They behave like strings because they are who they.
//however in Javascript most everything can be mutated.

// Anything that makes your code easier to understand makes it possible to build a more ambitious system.

//Simulation
//Robot takes the VillageState and trys to come up with the best way to get the fucking packages.
//To think like a coder we must think:
//What must a robot do to solve this.

function runRobot(package,robot,location)

function runRobot(state, robot, memory){
    for(let turn = 0;; turn++){
        if(state.parcels.length==0){
            console.log(`Done in ${turn} turns`)
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`moved to $action.direction`)
    }
}

function findRoute(graph, from, to){
    let work = [{at: from, route:[]}];
    for(let i = 0; i < work.length; i++){
        let{at,route} = work[i];
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)){
                work.push({at: place, route: route.concat(place)})
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route){
    if (route.length === 0){
        let parcel = parcels[0];
        if (parcel.place != place){
            route= findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.add)
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}