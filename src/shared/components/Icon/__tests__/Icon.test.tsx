import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { render, screen } from '@testing-library/react';
import Icon from '../index';

describe('src/shared/components/Icon', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const { container } = render(<Icon component={() => <HomeOutlined />} />);
        expect(container).toMatchSnapshot();
    });

    it('should render icon with color "red" and size 64px', () => {
        render(<Icon size='64px' color='red' component={() => <HomeOutlined />} />);
        const icon = screen.getByTestId('ut-custom-icon');
        expect(icon).toHaveStyle('color: red');
        expect(icon).toHaveStyle('height: 64px');
        expect(icon).toHaveStyle('font-size: 64px');
    });

    it('should render icon with color "red" and size 64px and then change color to "blue" and size to 20px', () => {
        const { rerender } = render(<Icon size='64px' color='red' component={() => <HomeOutlined />} />);
        const icon = screen.getByTestId('ut-custom-icon');
        expect(icon).toHaveStyle('color: red');
        expect(icon).toHaveStyle('height: 64px');
        expect(icon).toHaveStyle('font-size: 64px');

        rerender(<Icon size='20px' color='blue' component={() => <HomeOutlined />} />);
        expect(icon).toHaveStyle('color: blue');
        expect(icon).toHaveStyle('height: 20px');
        expect(icon).toHaveStyle('font-size: 20px');
    });
});
