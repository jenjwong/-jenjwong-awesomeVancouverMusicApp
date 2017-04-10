import reducers from './index';

test('sets filteredConcertsArray by cost input range', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_FILTERED_CONCERTS',filteredConcertData:['The Chapel-0','The Chapel-5','The Chapel-18','The Chapel-23']});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:['The Chapel-0','The Chapel-5','The Chapel-18','The Chapel-23'],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}});
});

test('sets filteredConcertsArray by typed input', () => {
  let state;
  state = reducers({concerts:{concertsDictionary:[],filteredConcertsArray:[],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}}, {type:'SET_FILTERED_CONCERTS',filteredConcertData:['The Chapel-0']});
  expect(state).toEqual({concerts:{concertsDictionary:[],filteredConcertsArray:['The Chapel-0'],concertsArray:[]},filters:{searchTerm:'',concertsCostMin:0,concertsCostMax:100,searchCost:0,isCostSpecified:false}});
});
