import reducers from './index';

test('sets concertsCostMin', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_CONCERTS_COST_MIN',min:15});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:15,concertsCostMax:100,searchCost:0,isCostSpecified:false}});
});


test('sets concertCostMax', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_CONCERTS_COST_MAX',max:145});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:145,searchCost:0,isCostSpecified:false}});
});

test('setsSearchCost', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_SEARCH_COST',searchCost:145});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:145,isCostSpecified:false}});
});

test('sets searchTerm', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_SEARCH_TERM',searchTerm:'cairo'});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'cairo',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}});
});

test('updates concertsCostMin after typed input search', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_CONCERTS_COST_MIN',min:15});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:15,concertsCostMax:100,searchCost:0,isCostSpecified:false}});
});

test('updates concertsCostMax after typed input search', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_CONCERTS_COST_MAX',max:15});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:15,searchCost:0,isCostSpecified:false}});
});

test('sets isCostSpecified on range input change', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'IS_COST_SPECIFIED',bool:true});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:true}});
});
