import reducers from './index';

test('it should filter by typed input field', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:['Fox Theater-27'],concertsArray:[]},filters:{searchTerm:'bonobo',concertsCostMin:35,concertsCostMax:145,searchCost:145,isCostSpecified:false}}, {type:'SET_CONCERTS_COST_MAX',max:35});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:['Fox Theater-27'],concertsArray:[]},filters:{searchTerm:'bonobo',concertsCostMin:35,concertsCostMax:35,searchCost:145,isCostSpecified:false}});
});
