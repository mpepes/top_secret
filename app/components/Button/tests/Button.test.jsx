import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';

import Button from '../Button';

const renderer = new ShallowRenderer();

const props = {
    onClick: jest.fn(),
};

describe('SearchInput', () => {
    describe('Snapshot', () => {
        it('should render SearchInput with no value', () => {
            const wrapper = <Button {...props}>Test</Button>;
            const button = renderer.render(wrapper);
            expect(button).toMatchSnapshot();
        });
    });

    describe('Unit', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should call onClick when clicked', () => {
            const button = shallow(<Button {...props}>Test</Button>);
            button.find('button').simulate('click');
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });

        it('should not call onClick when button is disabled', () => {
            props.disabled = true;
            const button = mount(<Button {...props}>Test</Button>);
            button.find('button').simulate('click');
            expect(props.onClick).toHaveBeenCalledTimes(0);
        });
    });
});
