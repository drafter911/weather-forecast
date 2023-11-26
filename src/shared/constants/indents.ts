import React from 'react';

interface IIndents<T> {
    [key: string]: T;
}

const INDENTS: Readonly<IIndents<string>> = Object.freeze({
    XXXS: '4px',
    XXS: '8px',
    XS: '12px',
    S: '16px',
    M: '24px',
    L: '32px',
    XL: '40px',
    XXL: '64px'
});

export const TOP_INDENTS: Readonly<IIndents<React.CSSProperties>> = Object.freeze({
    XXXS: { marginTop: INDENTS.XXXS },
    XXS: { marginTop: INDENTS.XXS },
    XS: { marginTop: INDENTS.XS },
    S: { marginTop: INDENTS.S },
    M: { marginTop: INDENTS.M },
    L: { marginTop: INDENTS.L },
    XL: { marginTop: INDENTS.XL },
    XXL: { marginTop: INDENTS.XXL }
});

export const RIGHT_INDENTS: Readonly<IIndents<React.CSSProperties>> = Object.freeze({
    XXXS: { marginRight: INDENTS.XXXS },
    XXS: { marginRight: INDENTS.XXS },
    XS: { marginRight: INDENTS.XS },
    S: { marginRight: INDENTS.S },
    M: { marginRight: INDENTS.M },
    L: { marginRight: INDENTS.L },
    XL: { marginRight: INDENTS.XL },
    XXL: { marginRight: INDENTS.XXL }
});

export const BOTTOM_INDENTS: Readonly<IIndents<React.CSSProperties>> = Object.freeze({
    XXXS: { marginBottom: INDENTS.XXXS },
    XXS: { marginBottom: INDENTS.XXS },
    XS: { marginBottom: INDENTS.XS },
    S: { marginBottom: INDENTS.S },
    M: { marginBottom: INDENTS.M },
    L: { marginBottom: INDENTS.L },
    XL: { marginBottom: INDENTS.XL },
    XXL: { marginBottom: INDENTS.XXL }
});

export const LEFT_INDENTS: Readonly<IIndents<React.CSSProperties>> = Object.freeze({
    XXXS: { marginLeft: INDENTS.XXXS },
    XXS: { marginLeft: INDENTS.XXS },
    XS: { marginLeft: INDENTS.XS },
    S: { marginLeft: INDENTS.S },
    M: { marginLeft: INDENTS.M },
    L: { marginLeft: INDENTS.L },
    XL: { marginLeft: INDENTS.XL },
    XXL: { marginLeft: INDENTS.XXL }
});
