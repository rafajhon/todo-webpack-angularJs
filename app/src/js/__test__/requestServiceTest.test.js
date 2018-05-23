


var requestService = null;
beforeEach(angular.mock.module('app'));

beforeEach(angular.mock.inject(function (_requestService_) {
    requestService = _requestService_;
}));

describe('Realisa teste ', function () {

    it('should exist', function () {
        expect(requestService).toBeDefined();
    });
    
    it('teste function',function(){
        expect(requestService.teste()).toEqual(10);
    })
    
    it('2 = 2 ', function () {
        expect(4).toEqual(4);
    });
});