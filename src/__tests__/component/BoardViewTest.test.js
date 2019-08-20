import { shallow } from 'enzyme'
import BoardView from "../../js/components/board/BoardView"
import React from "react";



describe('BoardView', () => {
  let wrapper;
  const output = 10;

  beforeEach(()=>{
    wrapper = shallow(<BoardView
      handleReload={  jest.fn()}
    />)
  });

  it("render correctly Board component", () => {

    // const SpinnerComponent = mount(<Spinner />);
    // expect(SpinnerComponent).toMatchSnapshot();
  });
});
