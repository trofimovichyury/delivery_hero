import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import Select from '../../../../../src/js/components/widgets/form/Select';

const options = [
    'one',
    'two',
    'three'
];

describe('Select', () => {
    it('renders hidden option if placeholder send via props', () => {
        const wrapper = shallow(<Select placeholder='placeholder' />);
        expect(wrapper.find('option').length).to.equal(1);
    });

    it('renders 3 options for 3 length array', () => {
        const wrapper = shallow(<Select options={options} />);
        expect(wrapper.find('option').length).to.equal(3);
    });

    it('runs onChange callback on select change', () => {
        const onChange = spy();
        const wrapper = shallow(<Select options={options} onChange={onChange} />);
        wrapper.find('select').simulate('change');
        expect(onChange.calledOnce).to.be.true;
    });
});