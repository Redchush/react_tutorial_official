import { shallow, mount, render } from 'enzyme';
import Square from "../../js/components/board/Square"
import React from "react";



describe('SquareView', () => {
  let wrapper;
  const output = 10;

  beforeEach(()=>{
    wrapper = shallow(<Square onClick={jest.fn} cellSize={3}/>)
  });

  it("render correctly Square component", () => {
    expect(wrapper.find('button').prop("style").width).toEqual(3);
    // const SpinnerComponent = mount(<Spinner />);
    // expect(SpinnerComponent).toMatchSnapshot();
  });
});
