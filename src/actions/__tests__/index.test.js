// user files
import { saveComment } from '../../actions';
import { SAVE_COMMENT } from '../../actions/types';


describe('saveComment', () => {
  it('has the correct type', () => {
    const testAction = saveComment();
    expect(testAction.type).toEqual(SAVE_COMMENT);
  })


  it('has the correct payload', () => {
    const testAction = saveComment('New Test Comment');
    expect(testAction.payload).toEqual('New Test Comment');
  })
})
