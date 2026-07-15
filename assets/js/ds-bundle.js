/* @ds-bundle: {"format":3,"namespace":"DesignSystem_b5472a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"TripCard","sourcePath":"components/display/TripCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"667e02f95395","components/core/Button.jsx":"d68f4b4c32cd","components/core/IconButton.jsx":"20c2246573c3","components/core/Tag.jsx":"530d51eed22c","components/display/Avatar.jsx":"a034e51dcef1","components/display/Rating.jsx":"11597595e56d","components/display/Tabs.jsx":"3b00c57e286e","components/display/TripCard.jsx":"9889caee4875","components/forms/Checkbox.jsx":"2f365a8f3850","components/forms/Input.jsx":"eec15156adc5","components/forms/Select.jsx":"45dbd61da336","components/forms/Switch.jsx":"fb26f89f3ede","ui_kits/website/AboutScreen.jsx":"a259c5d9dc20","ui_kits/website/AuthScreen.jsx":"6ca4d1efe1fc","ui_kits/website/BookNowScreen.jsx":"e597c540b8bd","ui_kits/website/ClientDashboardScreen.jsx":"bde596d1dfa6","ui_kits/website/ContactScreen.jsx":"5998b60146d8","ui_kits/website/DashboardScreen.jsx":"3b82dd54d2d0","ui_kits/website/Footer.jsx":"c1ab3b302599","ui_kits/website/GalleryScreen.jsx":"c403cbabc498","ui_kits/website/Header.jsx":"a5b67c54bf98","ui_kits/website/HomeScreen.jsx":"7f737bf413e7","ui_kits/website/HomeTwoScreen.jsx":"26edbd823ff2","ui_kits/website/MiscScreens.jsx":"79fc9690be1a","ui_kits/website/ServicesScreen.jsx":"44c9c818f4c4","ui_kits/website/TripScreen.jsx":"60ff868c696a","ui_kits/website/data.js":"f5d97be2ac6d","ui_kits/website/icons.jsx":"5491dedff304","ui_kits/website/util.jsx":"0573b5bec40a","wayfarer-template/assets/js/dashboard.js":"b50209816aff","wayfarer-template/assets/js/data.js":"f5d97be2ac6d","wayfarer-template/assets/js/ds-bundle.js":"d08e3ec1fc73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b5472a = window.DesignSystem_b5472a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category label. Tone sets the color family. */
function Badge({
  children,
  tone = 'pine',
  variant = 'soft',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const tones = {
    pine: {
      soft: ['var(--pine-50)', 'var(--pine-700)'],
      solid: ['var(--pine-600)', '#fff']
    },
    marigold: {
      soft: ['var(--marigold-50)', 'var(--marigold-600)'],
      solid: ['var(--marigold-400)', 'var(--pine-900)']
    },
    clay: {
      soft: ['var(--clay-50)', 'var(--clay-500)'],
      solid: ['var(--clay-400)', '#fff']
    },
    success: {
      soft: ['var(--success-50)', 'var(--success-500)'],
      solid: ['var(--success-500)', '#fff']
    },
    warning: {
      soft: ['var(--warning-50)', 'var(--warning-500)'],
      solid: ['var(--warning-500)', '#fff']
    },
    error: {
      soft: ['var(--error-50)', 'var(--error-500)'],
      solid: ['var(--error-500)', '#fff']
    },
    neutral: {
      soft: ['var(--stone-100)', 'var(--stone-600)'],
      solid: ['var(--stone-700)', '#fff']
    }
  };
  const [bg, fg] = (tones[tone] || tones.pine)[variant] || (tones[tone] || tones.pine).soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wayfarer Button — the primary action element.
 * Variants map to the brand palette: primary = Pine, accent = Marigold,
 * secondary = Clay outline, ghost = quiet.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)',
      radius: 'var(--radius-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--text-base)',
      radius: 'var(--radius-md)',
      gap: '8px'
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--text-md)',
      radius: 'var(--radius-lg)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1.5px solid transparent'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent'
    },
    inverse: {
      background: 'var(--stone-0)',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: 'var(--tracking-snug)',
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    boxShadow: variant === 'primary' || variant === 'accent' ? 'var(--shadow-xs)' : 'none',
    ...v,
    ...style
  };
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--surface-sunk)',
    ghost: 'var(--color-primary-soft)',
    inverse: 'var(--stone-100)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.background = hoverBg[variant];
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      if (!disabled) {
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.transform = 'none';
      }
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Pass a Lucide (or any) icon node as children. */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    }
  };
  const v = variants[variant] || variants.ghost;
  const hoverBg = {
    solid: 'var(--color-primary-hover)',
    ghost: 'var(--surface-sunk)',
    outline: 'var(--surface-sunk)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = v.background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable filter chip — used in search facets and category rails. */
function Tag({
  children,
  selected = false,
  iconLeft = null,
  onClick,
  style = {},
  ...rest
}) {
  const clickable = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": clickable ? selected : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1,
      padding: '9px 15px',
      borderRadius: 'var(--radius-pill)',
      cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--color-primary)' : 'var(--surface-card)',
      color: selected ? 'var(--text-on-primary)' : 'var(--text-body)',
      border: selected ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-default)',
      transition: 'all var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    },
    onMouseEnter: e => {
      if (clickable && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (clickable && !selected) e.currentTarget.style.borderColor = 'var(--border-default)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/** Circular avatar with image or initials fallback. */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style = {}
}) {
  const px = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72
  }[size] || 40;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const fontSize = px * 0.38;
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: px,
      height: px,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pine-100)',
      color: 'var(--pine-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize,
      overflow: 'hidden',
      border: ring ? '2px solid var(--surface-card)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
/** Star rating display. value 0–5 (halves ok). Shows numeric value + review count. */
function Rating({
  value = 0,
  reviews,
  size = 'md',
  showValue = true,
  style = {}
}) {
  const px = {
    sm: 14,
    md: 17,
    lg: 20
  }[size] || 17;
  const font = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-md)'
  }[size] || 'var(--text-base)';
  const Star = ({
    fill
  }) => /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `g${fill}`
  }, /*#__PURE__*/React.createElement("stop", {
    offset: `${fill * 100}%`,
    stopColor: "var(--marigold-400)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: `${fill * 100}%`,
    stopColor: "var(--stone-200)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z",
    fill: `url(#g${fill})`
  }));
  const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, value - i)));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '1px'
    }
  }, stars.map((f, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: f
  }))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: font,
      color: 'var(--text-strong)'
    }
  }, value.toFixed(1)), reviews != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: font,
      color: 'var(--text-muted)'
    }
  }, "(", reviews.toLocaleString(), ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/** Underline tab bar. Controlled via `value` + `onChange(id)`. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const items = tabs.map(t => typeof t === 'string' ? {
    id: t,
    label: t
  } : t);
  const active = value ?? items[0]?.id;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1.5px solid var(--border-subtle)',
      ...style
    }
  }, items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        padding: '12px 16px',
        transition: 'color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-body)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: -1.5,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: on ? 'var(--color-primary)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/TripCard.jsx
try { (() => {
/**
 * Wayfarer's signature product card — a tour/destination with photo,
 * overlay badge + save button, title, location, rating, duration, and price.
 */
function TripCard({
  image,
  title,
  location,
  price,
  currency = '$',
  duration,
  rating,
  reviews,
  badge,
  badgeTone = 'marigold',
  saved = false,
  onSave,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    variant: "solid"
  }, badge)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": saved ? 'Saved' : 'Save trip',
    onClick: e => {
      e.stopPropagation();
      onSave && onSave(!saved);
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(4px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: saved ? 'var(--clay-400)' : 'none',
    stroke: saved ? 'var(--clay-400)' : 'var(--stone-600)',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, location && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), location), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-snug)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    reviews: reviews,
    size: "sm"
  }), duration && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-default)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, duration))), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      display: 'flex',
      alignItems: 'baseline',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "from"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, currency, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "/ person")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "View Trip"))));
}
Object.assign(__ds_scope, { TripCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TripCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled via `checked` + `onChange`. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
      border: checked ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, leading icon, and helper/error text. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  iconLeft = null,
  helper,
  error,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: '46px',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      boxShadow: focus ? 'var(--ring)' : 'none'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--error-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with label. Pass options as [{value,label}] or strings. */
function Select({
  label,
  options = [],
  value,
  onChange,
  iconLeft = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: '46px'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      marginRight: '10px'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      flex: 1,
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      paddingRight: '20px'
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '14px',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '12px'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. Controlled via `checked` + `onChange(nextBool)`. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: checked ? 'var(--color-primary)' : 'var(--stone-300)',
      transition: 'background var(--dur-base) var(--ease-out)',
      flexShrink: 0,
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
// About: story, mission, stats, team. window.AboutScreen.
function AboutScreen({
  onNav
}) {
  const {
    Button,
    Avatar,
    Badge
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const stats = [['40+', 'Countries'], ['12', 'Avg. group size'], ['9,400', 'Happy travelers'], ['4.9', 'Avg. trip rating']];
  const team = [{
    name: 'Mara Okafor',
    role: 'Founder & lead guide',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=70&auto=format&fit=crop'
  }, {
    name: 'Liam Chen',
    role: 'Head of trips',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&q=70&auto=format&fit=crop'
  }, {
    name: 'Sofia Reyes',
    role: 'Traveler care',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&q=70&auto=format&fit=crop'
  }, {
    name: 'Diego Marín',
    role: 'Local partnerships',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&q=70&auto=format&fit=crop'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 380,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=75&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(6,53,42,0.82), rgba(6,53,42,0.4))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "Our story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '12px 0 0',
      maxWidth: 640
    }
  }, "We believe the best trips are led by locals."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '64px 24px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Wayfarer started with a simple idea: that a place is best understood through the people who call it home. So we built small-group trips around local guides \u2014 and kept them small on purpose."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '24px 0 0'
    }
  }, "Today we run guided journeys in more than forty countries, capped at a dozen travelers, with characterful stays and time built in to wander. We handle the logistics so you can be present for the trip.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '26px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--color-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, [['HeartHandshake', 'Local first', 'Guides and partners are from the places we visit — and paid fairly for it.'], ['Leaf', 'Light footprint', 'Carbon-offset travel, small groups, and locally owned stays.'], ['ShieldCheck', 'Care, always', 'Free cancellation up to 30 days out and 24/7 on-trip support.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 24px',
      textAlign: 'center'
    }
  }, "The people behind the trips"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, team.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.photo,
    alt: m.name,
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, m.role))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-xl)',
      padding: '48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 600,
      color: 'var(--stone-50)',
      margin: '0 0 16px'
    }
  }, "Ready to go further?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services')
  }, "Browse trips"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Talk to us")))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuthScreen.jsx
try { (() => {
// Login / Sign up / Forgot password — split panel, responsive, with theme + RTL toggles. window.AuthScreen.
function AuthScreen({
  mode = 'login',
  onNav,
  theme,
  onToggleTheme,
  dir,
  onToggleDir
}) {
  const {
    Button,
    Input,
    Checkbox
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isNarrow = window.useMediaQuery('(max-width: 860px)');
  const isSignup = mode === 'signup';
  const isForgot = mode === 'forgot';
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });
  const [errors, setErrors] = React.useState({});
  const [showPw, setShowPw] = React.useState(false);
  const [showPw2, setShowPw2] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  function submit(e) {
    e.preventDefault();
    const er = {};
    if (isSignup && !form.name.trim()) er.name = 'Please enter your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (!isForgot && form.password.length < 6) er.password = 'At least 6 characters';
    if (isSignup && form.confirm !== form.password) er.confirm = 'Passwords don\u2019t match';
    setErrors(er);
    if (Object.keys(er).length === 0) setDone(true);
  }

  // Password field with an eye show/hide toggle (DS Input has no trailing slot).
  const PwInput = ({
    label,
    value,
    onChange,
    error,
    show,
    onToggle
  }) => {
    const [focus, setFocus] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-strong)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--surface-card)',
        border: '1.5px solid ' + (error ? 'var(--error-500)' : focus ? 'var(--color-primary)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        padding: '0 14px',
        height: 46,
        transition: 'border-color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Lock",
      size: 18
    })), /*#__PURE__*/React.createElement("input", {
      type: show ? 'text' : 'password',
      value: value,
      onChange: onChange,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: {
        flex: 1,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-strong)',
        minWidth: 0
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onToggle,
      "aria-label": show ? 'Hide password' : 'Show password',
      title: show ? 'Hide password' : 'Show password',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        padding: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: show ? 'EyeOff' : 'Eye',
      size: 18
    }))), error && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        color: 'var(--error-500)'
      }
    }, error));
  };
  const toggles = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      insetInlineEnd: 20,
      display: 'flex',
      gap: 10,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    title: "Toggle theme",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    title: dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL',
    style: {
      height: 42,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 700,
      fontSize: 13
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR'));
  const title = isForgot ? 'Reset your password' : isSignup ? 'Create your account' : 'Sign in';
  const subtitle = isForgot ? 'Enter your email and we\u2019ll send you a reset link.' : isSignup ? 'Join Wayfarer and start going further.' : 'Welcome back — sign in to manage your trips.';
  const formPanel = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isNarrow ? '40px 22px' : '48px',
      background: 'var(--surface-canvas)'
    }
  }, toggles, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "36",
    height: "36",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), done && !isForgot ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isForgot ? 'MailCheck' : 'Check',
    size: 32,
    color: "var(--success-500)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, isForgot ? 'Check your inbox' : isSignup ? 'Welcome aboard!' : 'Welcome back!'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, isForgot ? 'We\u2019ve sent a password reset link to ' + (form.email || 'your email') + '.' : isSignup ? 'Your account is ready. Time to plan your first adventure.' : 'You\u2019re signed in. Pick up where you left off.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onNav(isForgot ? 'login' : 'account')
  }, isForgot ? 'Back to sign in' : 'Go to dashboard')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 26px'
    }
  }, subtitle), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, isForgot && done && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--success-50)',
      border: '1px solid var(--success-500)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MailCheck",
    size: 20,
    color: "var(--success-500)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, "Reset link sent!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, "Check ", form.email || 'your inbox', " for a link to reset your password."))), isSignup && /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    value: form.name,
    onChange: set('name'),
    error: errors.name,
    placeholder: "Jordan Rivera",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "User",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    error: errors.email,
    placeholder: "you@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  }), !isForgot && /*#__PURE__*/React.createElement(PwInput, {
    label: "Password",
    value: form.password,
    onChange: set('password'),
    error: errors.password,
    show: showPw,
    onToggle: () => setShowPw(s => !s)
  }), isSignup && /*#__PURE__*/React.createElement(PwInput, {
    label: "Confirm password",
    value: form.confirm,
    onChange: set('confirm'),
    error: errors.confirm,
    show: showPw2,
    onToggle: () => setShowPw2(s => !s)
  }), mode === 'login' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNav('forgot'),
    style: {
      fontSize: 14,
      color: 'var(--text-link)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true
  }, isForgot ? done ? 'Resend link' : 'Send reset link' : isSignup ? 'Create account' : 'Sign in')), isForgot ? /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '24px 0 0'
    }
  }, "Remembered it? ", /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('login'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 700,
      fontSize: 14,
      padding: 0
    }
  }, "Back to sign in")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "or"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [['Google', 'Globe'], ['Apple', 'Apple'], ['Facebook', 'Facebook']].map(([label, ic]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    type: "button",
    "aria-label": 'Continue with ' + label,
    title: 'Continue with ' + label,
    style: {
      flex: 1,
      height: 48,
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)',
      transition: 'border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.background = 'var(--surface-sunk)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.background = 'var(--surface-card)';
    }
  }, ic === 'Facebook' ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "#1877F2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"
  })) : ic === 'Apple' ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.37 12.78c.02 2.5 2.2 3.33 2.22 3.34-.02.06-.35 1.2-1.15 2.37-.69 1.02-1.41 2.03-2.55 2.05-1.11.02-1.47-.66-2.74-.66-1.27 0-1.67.64-2.72.68-1.09.04-1.93-1.1-2.63-2.11-1.43-2.07-2.52-5.85-1.05-8.4.73-1.27 2.03-2.07 3.44-2.09 1.07-.02 2.09.72 2.74.72.66 0 1.89-.89 3.19-.76.54.02 2.07.22 3.05 1.65-.08.05-1.82 1.06-1.8 3.18M14.3 5.39c.58-.7.97-1.68.86-2.65-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.89-.47 2.47-1.17"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 4.75c1.61 0 3.06.55 4.2 1.64l3.15-3.15C17.45 1.46 14.96.5 12 .5A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 4.75 12 4.75Z"
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '24px 0 0'
    }
  }, isSignup ? 'Already have an account? ' : 'New to Wayfarer? ', /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(isSignup ? 'login' : 'signup'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 700,
      fontSize: 14,
      padding: 0
    }
  }, isSignup ? 'Sign in' : 'Create one'))))));
  const imagePanel = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      minHeight: isNarrow ? 180 : 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=74&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,53,42,0.85), rgba(6,53,42,0.35))'
    }
  }), !isNarrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 48,
      right: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "Go further"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      lineHeight: 1.1,
      fontWeight: 600,
      color: '#fff',
      margin: '12px 0 0'
    }
  }, "Your next adventure starts here."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--stone-100)',
      margin: '14px 0 0',
      maxWidth: 380
    }
  }, "Small-group, guide-led journeys in 40+ countries. Sign in to manage your bookings.")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: isNarrow ? 'column' : 'row'
    }
  }, isNarrow ? /*#__PURE__*/React.createElement(React.Fragment, null, imagePanel, formPanel) : /*#__PURE__*/React.createElement(React.Fragment, null, formPanel, imagePanel));
}
window.AuthScreen = AuthScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuthScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookNowScreen.jsx
try { (() => {
// Multi-step booking: trip & date → travelers → details → payment → confirmation. window.BookNowScreen.
function BookNowScreen({
  tripId,
  onNav
}) {
  const {
    Button,
    Input,
    Select,
    Switch,
    Checkbox,
    Badge
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isNarrow = window.useMediaQuery('(max-width: 640px)');
  const trips = window.WF_TRIPS;
  const [tid, setTid] = React.useState(tripId || trips[0].id);
  const t = trips.find(x => x.id === tid) || trips[0];
  const steps = ['Trip & date', 'Travelers', 'Your details', 'Payment'];
  const [step, setStep] = React.useState(0);
  const [date, setDate] = React.useState(14);
  const [travelers, setTravelers] = React.useState(2);
  const [insurance, setInsurance] = React.useState(true);
  const [form, setForm] = React.useState({
    first: '',
    last: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = React.useState({});
  const subtotal = t.price * travelers;
  const fees = Math.round(subtotal * 0.04);
  const ins = insurance ? 89 * travelers : 0;
  const total = subtotal + fees + ins;

  // available departure days in September (demo)
  const avail = {
    14: true,
    5: true,
    21: true,
    28: true,
    2: true
  };
  const firstDow = 1; // Sep 2026 starts Tuesday-ish (demo)

  function validateDetails() {
    const e = {};
    if (!form.first.trim()) e.first = 'Required';
    if (!form.last.trim()) e.last = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone';
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function next() {
    if (step === 2 && !validateDetails()) return;
    setStep(s => Math.min(s + 1, steps.length));
  }
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  if (step >= steps.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-canvas)',
        minHeight: 560,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 48,
        maxWidth: 480,
        textAlign: 'center',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--success-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 22px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Check",
      size: 36,
      color: "var(--success-500)",
      strokeWidth: 2.5
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 32,
        fontWeight: 600,
        color: 'var(--text-strong)',
        margin: '0 0 10px'
      }
    }, "You're going, ", form.first || 'traveler', "!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: '0 0 8px'
      }
    }, "Your spot on ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)'
      }
    }, t.title), " departing Sep ", date, " is reserved. A confirmation is on its way to ", form.email || 'your inbox', "."), /*#__PURE__*/React.createElement("div", {
      className: "u-mono",
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '0 0 24px'
      },
      "data-ltr": true
    }, "Booking ref \xB7 WF-2K9X4"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav('home')
    }, "Back to home")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, "Book your trip"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr 1fr' : undefined,
      ...(isNarrow ? {} : {
        display: 'flex'
      }),
      alignItems: 'center',
      gap: isNarrow ? 10 : 0,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, steps.map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: isNarrow ? i === step ? 'var(--color-primary-soft)' : 'var(--surface-card)' : 'transparent',
      border: isNarrow ? '1px solid var(--border-subtle)' : 'none',
      borderRadius: isNarrow ? 'var(--radius-md)' : 0,
      padding: isNarrow ? '10px 12px' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'var(--font-mono)',
      background: i < step ? 'var(--color-primary)' : i === step ? 'var(--color-primary)' : 'var(--surface-sunk)',
      color: i <= step ? 'var(--text-on-primary)' : 'var(--text-muted)',
      border: i === step ? '2px solid var(--color-primary)' : 'none'
    }
  }, i < step ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: i === step ? 700 : 500,
      color: i === step ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, label)), !isNarrow && i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 24,
      height: 2,
      background: i < step ? 'var(--color-primary)' : 'var(--border-default)',
      margin: '0 12px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 28
    }
  }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    label: "Choose your trip",
    value: tid,
    onChange: e => setTid(e.target.value),
    options: trips.map(x => ({
      value: x.id,
      label: x.title
    })),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Compass",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "Select a departure \xB7 September 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '0 0 14px'
    }
  }, "Highlighted dates have guaranteed availability."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 6
    }
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-muted)',
      padding: '4px 0'
    }
  }, d)), Array.from({
    length: firstDow
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: 'e' + i
  })), Array.from({
    length: 30
  }).map((_, i) => {
    const day = i + 1;
    const ok = avail[day];
    const on = date === day && ok;
    return /*#__PURE__*/React.createElement("button", {
      key: day,
      disabled: !ok,
      onClick: () => setDate(day),
      style: {
        aspectRatio: '1',
        minHeight: 44,
        border: on ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--color-primary)' : ok ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--text-on-primary)' : ok ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: ok ? 700 : 400,
        cursor: ok ? 'pointer' : 'default',
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        opacity: ok ? 1 : 0.4
      }
    }, day);
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Travelers",
    value: String(travelers),
    onChange: e => setTravelers(Number(e.target.value)),
    options: [1, 2, 3, 4].map(n => ({
      value: String(n),
      label: n + (n === 1 ? ' traveler' : ' travelers')
    })),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Users",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Add travel insurance ($89 / person)",
    checked: insurance,
    onChange: setInsurance
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like a private room (if available)",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have dietary requirements",
    checked: false,
    onChange: () => {}
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    value: form.first,
    onChange: set('first'),
    error: errors.first,
    placeholder: "Jordan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    value: form.last,
    onChange: set('last'),
    error: errors.last,
    placeholder: "Rivera"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    error: errors.email,
    placeholder: "you@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    value: form.phone,
    onChange: set('phone'),
    error: errors.phone,
    placeholder: "+1 (555) 000-0000",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Phone",
      size: 18
    })
  })), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Card number",
    placeholder: "1234 5678 9012 3456",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "CreditCard",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Expiry",
    placeholder: "MM / YY"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    placeholder: "123"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "ShieldCheck",
      size: 14,
      color: "var(--success-500)"
    })
  }, "Secured \xB7 you won't be charged until 30 days before departure"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => step === 0 ? onNav('trip') : setStep(step - 1),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "ChevronLeft",
      size: 18,
      color: "var(--color-primary)"
    })
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: step === steps.length - 1 ? 'accent' : 'primary',
    size: "lg",
    onClick: next
  }, step === steps.length - 1 ? 'Confirm & reserve' : 'Continue'))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 96,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 120
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 12,
      right: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 600,
      color: '#fff'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--stone-100)'
    }
  }, t.location, " \xB7 ", t.duration, " \xB7 Sep ", date))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, [[`$${t.price} × ${travelers}`, subtotal], ['Booking fees', fees]].concat(insurance ? [[`Insurance × ${travelers}`, ins]] : []).map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 15,
      color: 'var(--text-body)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true
  }, "$", v.toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--text-strong)'
    }
  }, "$", total.toLocaleString()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 32
    }
  }, [['ShieldCheck', 'Free cancellation', '30 days before departure'], ['Lock', 'Secure payment', '256-bit encryption'], ['CalendarClock', 'No payment today', 'Reserve, pay later'], ['Headphones', '24/7 support', 'Real humans, always']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "What's included in ", t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 40px'
    }
  }, ['Local expert guide throughout', 'All accommodation, locally owned', 'Listed activities & entrance fees', 'Most breakfasts & a welcome dinner', 'Airport transfers on trip dates', 'Small group, capped at ' + t.group.replace('Max ', '')].map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 16,
    color: "var(--success-500)",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      marginBottom: 8,
      background: 'var(--color-primary-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 36px',
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Quote",
    size: 36,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "\u201CBooking took five minutes and every promise held up on the ground. The best trip we've taken.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u2014 Liam Chen, booked ", t.title)))));
}
window.BookNowScreen = BookNowScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookNowScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ClientDashboardScreen.jsx
try { (() => {
// Traveler (client) dashboard — manage bookings, itineraries, documents, updates.
// window.ClientDashboardScreen.

// Isolated countdown — only THIS component re-renders each second, so the rest
// of the dashboard (and its images) never blink.
function Countdown({
  target
}) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const cd = [[Math.floor(diff / 86400000), 'days'], [Math.floor(diff / 3600000) % 24, 'hrs'], [Math.floor(diff / 60000) % 60, 'min'], [Math.floor(diff / 1000) % 60, 'sec']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, cd.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minWidth: 62,
      textAlign: 'center',
      background: 'rgba(255,255,255,0.14)',
      backdropFilter: 'blur(6px)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: '#fff'
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--stone-200)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, l))));
}
function ClientDashboardScreen({
  onNav,
  onOpenTrip,
  theme,
  onToggleTheme,
  dir,
  onToggleDir
}) {
  const {
    Badge,
    Avatar,
    Button,
    Rating,
    TripCard
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const next = trips.find(t => t.id === 'kyoto') || trips[0];
  const [section, setSection] = React.useState('Overview');
  const mainRef = React.useRef(null);
  React.useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [section]);
  const [openDay, setOpenDay] = React.useState(0);
  const [docs, setDocs] = React.useState([{
    name: 'Passport.pdf',
    type: 'Passport',
    status: 'Verified',
    tone: 'success'
  }, {
    name: 'Travel-insurance.pdf',
    type: 'Insurance',
    status: 'In review',
    tone: 'warning'
  }, {
    name: null,
    type: 'Japan visa',
    status: 'Action needed',
    tone: 'error'
  }, {
    name: 'Emergency-contact',
    type: 'Emergency contact',
    status: 'Complete',
    tone: 'success'
  }]);
  const fileRef = React.useRef(null);
  const [pendingType, setPendingType] = React.useState(null);
  const nav = [['Overview', 'LayoutDashboard'], ['My trips', 'Luggage'], ['Itinerary', 'Map'], ['Documents', 'FileText'], ['Updates', 'Bell'], ['Profile', 'User']];
  const bookings = [{
    trip: next,
    date: 'Sep 14, 2026',
    status: 'Confirmed',
    tone: 'success',
    ref: 'WF-2K9X4',
    when: 'upcoming'
  }, {
    trip: trips.find(t => t.id === 'iceland') || trips[3],
    date: 'Oct 21, 2026',
    status: 'Payment due',
    tone: 'warning',
    ref: 'WF-7H3L2',
    when: 'upcoming'
  }, {
    trip: trips.find(t => t.id === 'amalfi') || trips[4],
    date: 'May 3, 2025',
    status: 'Completed',
    tone: 'neutral',
    ref: 'WF-1A0P8',
    when: 'past'
  }];
  const updates = [['UserCheck', 'pine', 'Your guide is confirmed', 'Mara Okafor will lead your Kyoto trip. She has 9 years of experience in the region.', '2 days ago'], ['Plane', 'marigold', 'Flight details received', 'We\u2019ve logged your arrival into Kansai (KIX) on Sep 13. Airport transfer is arranged.', '5 days ago'], ['ListChecks', 'pine', 'Pre-trip checklist ready', 'Your packing list and what-to-know guide for Kyoto are now available.', '1 week ago'], ['CloudSun', 'clay', 'Weather note for Kyoto', 'Expect mild 18\u201324\u00b0C days in September. Pack light layers and a rain shell.', '1 week ago'], ['Users', 'pine', 'Meet your travel group', 'You\u2019ll be travelling with 9 others from 4 countries. Say hello in the group chat.', '2 weeks ago'], ['CreditCard', 'marigold', 'Balance reminder', 'Your remaining balance is due 30 days before departure. No action needed yet.', '2 weeks ago'], ['BookOpen', 'pine', 'Kyoto reading list added', 'A short guide to temple etiquette, tea culture, and local phrases is in your docs.', '3 weeks ago']];

  // countdown to departure (demo: 56 days out) — isolated below so the page doesn't re-render each tick
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 56, []);
  function pickFile(type) {
    setPendingType(type);
    fileRef.current && fileRef.current.click();
  }
  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f && pendingType) setDocs(d => d.map(x => x.type === pendingType ? {
      ...x,
      name: f.name,
      status: 'In review',
      tone: 'warning'
    } : x));
    setPendingType(null);
    e.target.value = '';
  }
  const docComplete = docs.filter(d => d.tone === 'success').length;

  // --- reusable bits ---
  const Panel = ({
    title,
    action,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, children));
  const NextTripHero = () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 240,
      display: 'flex',
      alignItems: 'flex-end',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image,
    alt: next.title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,53,42,0.92) 0%, rgba(6,53,42,0.35) 60%, rgba(6,53,42,0.1) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '28px 30px',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "marigold",
    variant: "solid"
  }, "Next departure"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: '#fff',
      margin: '12px 0 4px'
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--stone-100)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 16,
    color: "var(--marigold-300)"
  }), next.location), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Calendar",
    size: 16,
    color: "var(--marigold-300)"
  }), "Sep 14, 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    target: target
  }))));
  const BookingCard = ({
    b
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isNarrow ? 'column' : 'row',
      gap: isNarrow ? 14 : 16,
      alignItems: isNarrow ? 'stretch' : 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: b.trip.image,
    alt: "",
    style: {
      width: isNarrow ? '100%' : 84,
      height: isNarrow ? 150 : 84,
      borderRadius: 'var(--radius-md)',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone
  }, b.status), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, b.ref)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, b.trip.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 8,
      marginTop: 3,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, b.trip.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.trip.duration))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isNarrow ? 'row' : 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: b.when === 'past' ? 'secondary' : 'primary',
    fullWidth: isNarrow,
    onClick: () => onOpenTrip(b.trip.id)
  }, b.when === 'past' ? 'Rebook' : 'View trip'), b.status === 'Payment due' && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    fullWidth: isNarrow,
    onClick: () => onNav('book')
  }, "Pay now")));
  const DocRow = ({
    d
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap',
      padding: '14px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: d.name ? 'var(--color-primary-soft)' : 'var(--surface-sunk)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.name ? 'FileCheck' : 'FilePlus',
    size: 20,
    color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, d.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, d.name || 'Not uploaded yet')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      marginInlineStart: isNarrow ? '56px' : 'auto',
      width: isNarrow ? 'calc(100% - 56px)' : 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: d.name ? 'ghost' : 'secondary',
    onClick: () => pickFile(d.type),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: d.name ? 'RefreshCw' : 'Upload',
      size: 15,
      color: "var(--color-primary)"
    })
  }, d.name ? 'Replace' : 'Upload')));
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setNavOpen(false);
  }, [section]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    onChange: onFile,
    style: {
      display: 'none'
    }
  }), isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setNavOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 79
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: isNarrow ? {
      position: 'fixed',
      top: 0,
      insetInlineStart: 0,
      width: 280,
      height: '100vh',
      zIndex: 80,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16,
      transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
    } : {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '6px 8px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([label, ic]) => {
    const on = section === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setSection(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        minHeight: 44,
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 14.5,
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }), label, label === 'Updates' && /*#__PURE__*/React.createElement("span", {
      style: {
        marginInlineStart: 'auto',
        fontSize: 11,
        fontWeight: 700,
        color: '#fff',
        background: 'var(--clay-400)',
        borderRadius: 'var(--radius-pill)',
        minWidth: 18,
        height: 18,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5px'
      }
    }, updates.length));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'auto',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, isNarrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 4px 8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 18
  }), theme === 'dark' ? 'Light' : 'Dark'), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 12px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--text-body)',
      fontSize: 14.5,
      width: '100%',
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 19,
    color: "var(--text-muted)"
  }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: () => setNavOpen(true),
    "aria-label": "Menu",
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section), !isNarrow && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '2px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section === 'Overview' ? 'Your next adventure is just around the corner.' : 'Manage your ' + section.toLowerCase() + ' for upcoming trips.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexShrink: 0
    }
  }, !isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    onClick: () => setSection('Updates'),
    style: {
      position: 'relative',
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: isNarrow ? 'none' : 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 19
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      insetInlineEnd: 9,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--clay-400)'
    }
  })), !isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    title: dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL',
    style: {
      height: 42,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 700,
      fontSize: 13
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingInlineStart: isNarrow ? 0 : 6,
      borderInlineStart: isNarrow ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jordan Rivera",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&q=70&auto=format&fit=crop",
    size: "md"
  }), !isNarrow && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, "Jordan Rivera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Gold traveler"))))), /*#__PURE__*/React.createElement("main", {
    ref: mainRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      minWidth: 0,
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NextTripHero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['Luggage', '2', 'Upcoming trips', 'pine'], ['FileText', docComplete + '/4', 'Documents ready', 'marigold'], ['Award', '14', 'Countries visited', 'success']].map(([ic, v, l, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Latest updates",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Updates'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 13.5,
        cursor: 'pointer'
      }
    }, "See all")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, updates.slice(0, 3).map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: `var(--${u[1]}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u[0],
    size: 18,
    color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, u[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, u[4])))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Documents",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Documents'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 13.5,
        cursor: 'pointer'
      }
    }, "Manage")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, docs.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.name ? 'FileCheck' : 'FilePlus',
    size: 17,
    color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, d.type), /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Get ready for Kyoto",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "3 of 6 done")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Booking confirmed', true], ['Passport uploaded', true], ['Travel insurance added', true], ['Visa documents', false], ['Pre-trip questionnaire', false], ['Join the group chat', false]].map(([label, done], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: done ? 'var(--success-50)' : 'var(--surface-sunk)',
      border: done ? 'none' : '1.5px solid var(--border-default)'
    }
  }, done && /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 14,
    color: "var(--success-500)",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14.5,
      color: done ? 'var(--text-muted)' : 'var(--text-strong)',
      textDecoration: done ? 'line-through' : 'none'
    }
  }, label), !done && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setSection('Documents')
  }, "Do it"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Recommended for you"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('services'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 13.5,
      cursor: 'pointer'
    }
  }, "Browse all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, trips.filter(t => t.id !== next.id).slice(0, 3).map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    onClick: () => onOpenTrip(t.id)
  }))))), section === 'My trips' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['Plane', '14', 'Trips taken'], ['Globe2', '11', 'Countries'], ['Moon', '92', 'Nights away'], ['Footprints', '1,240', 'Miles trekked']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Upcoming"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bookings.filter(b => b.when === 'upcoming').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
    key: i,
    b: b
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Past trips"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bookings.filter(b => b.when === 'past').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
    key: i,
    b: b
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Saved for later"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, trips.filter(t => ['santorini', 'safari', 'norway'].includes(t.id)).map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    saved: true,
    onClick: () => onOpenTrip(t.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      minHeight: 200,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=72&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(6,53,42,0.88), rgba(6,53,42,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '32px 36px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "Ready for your next adventure?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--stone-100)',
      margin: '0 0 20px',
      maxWidth: 440
    }
  }, "You've visited 11 countries with us. There are 30+ more waiting."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services')
  }, "Browse new trips")))), section === 'Itinerary' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      height: 180,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: '#fff'
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-100)'
    }
  }, next.location, " \xB7 ", next.duration, " \xB7 ", next.group)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse",
    onClick: () => onOpenTrip(next.id)
  }, "View trip page"))), /*#__PURE__*/React.createElement(Panel, {
    title: `${next.title} · day by day`,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Download",
        size: 15,
        color: "var(--color-primary)"
      }),
      onClick: () => window.print()
    }, "Download PDF")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, next.itinerary.map(([h, p], i) => {
    const on = openDay === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenDay(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: on ? 'var(--color-primary)' : 'var(--surface-sunk)',
        color: on ? 'var(--text-on-primary)' : 'var(--text-body)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        flexShrink: 0
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-strong)'
      }
    }, "Day ", i + 1, " \xB7 ", h), /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'ChevronUp' : 'ChevronDown',
      size: 18,
      color: "var(--text-muted)"
    })), on && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 16px 48px',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, p));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "What's included"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Local expert guide throughout', 'All accommodation', 'Listed activities & fees', 'Most breakfasts & welcome dinner', 'Airport transfers'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 16,
    color: "var(--success-500)",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Panel, {
    title: "What to pack"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['Light layers', 'Rain shell', 'Walking shoes', 'Power adapter', 'Reusable bottle', 'Sun hat', 'Day pack', 'Camera'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Good to know"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Languages', 'Local language & currency', 'Japanese · Japanese yen (¥). English is limited outside cities.'], ['Plug', 'Power & connectivity', 'Type A/B sockets, 100V. Pocket Wi-Fi is provided for the group.'], ['HeartPulse', 'Health & safety', 'No vaccinations required. Your guide carries a first-aid kit throughout.'], ['Wallet', 'Spending money', 'Budget ~$40/day for lunches and extras. Cards widely accepted in Kyoto.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, p))))))), section === 'Documents' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => pickFile('Passport'),
    style: {
      border: '2px dashed var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 24px',
      textAlign: 'center',
      cursor: 'pointer',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--color-primary-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "UploadCloud",
    size: 26,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Drop files here or click to upload"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "PDF, JPG or PNG \xB7 up to 10MB each. Encrypted & private.")), /*#__PURE__*/React.createElement(Panel, {
    title: "Your travel documents"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, docComplete, " of ", docs.length, " complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${docComplete / docs.length * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  }))), docs.map((d, i) => /*#__PURE__*/React.createElement(DocRow, {
    key: i,
    d: d
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Required for your trips"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Temples & Tea of Kyoto', 'Passport · Japan visa', 'clay'], ['Land of Fire & Ice', 'Passport only', 'success']].map(([trip, req, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      padding: '12px 14px',
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Luggage",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, req)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tone === 'clay' ? 'Action needed' : 'Ready'))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Recent activity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Upload', 'Passport.pdf uploaded', '2 days ago'], ['ShieldCheck', 'Insurance received', '2 days ago'], ['Clock', 'Visa reminder sent', '4 days ago']].map(([ic, l, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Need help with documents?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Which documents do I need?', 'Requirements vary by destination — check each trip’s page, or your “Required for your trips” list above.'], ['Are my files secure?', 'Yes. All uploads are encrypted at rest and only visible to you and your trip coordinator.'], ['When are documents due?', 'Most are needed 30 days before departure; visa documents may be required earlier.']].map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a)))))), section === 'Updates' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "Trip updates & notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, updates.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: `var(--${u[1]}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u[0],
    size: 20,
    color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15.5,
      color: 'var(--text-strong)'
    }
  }, u[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, u[4])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '4px 0 0'
    }
  }, u[3])))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Notification preferences"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Trip reminders & countdowns', true], ['Guide & itinerary changes', true], ['Document & visa alerts', true], ['Weather updates', false], ['Deals & new trips', false]].map(([label, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--border-default)',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff'
    }
  }))))))), section === 'Profile' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Personal details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Full name', 'Jordan Rivera'], ['Email', 'jordan@email.com'], ['Phone', '+1 (555) 014 2277'], ['Nationality', 'United States'], ['Date of birth', 'Mar 12, 1991']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 4 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travel preferences"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 18
    }
  }, ['Adventure', 'Culture', 'Food', 'Window seat', 'Vegetarian'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "pine"
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Settings",
      size: 15,
      color: "var(--color-primary)"
    }),
    onClick: () => onNav('contact')
  }, "Edit preferences"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-inverse)',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "Wayfarer rewards"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--stone-50)',
      margin: '6px 0 2px'
    }
  }, "Gold traveler"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-200)'
    }
  }, "2,480 points \xB7 520 to Platinum")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 5,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '82%',
      height: '100%',
      background: 'var(--marigold-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--stone-200)',
      marginTop: 8,
      textAlign: 'end'
    }
  }, "82% to next tier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Emergency contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Name', 'Alex Rivera'], ['Relationship', 'Sibling'], ['Phone', '+1 (555) 660 1180']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 2 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Security"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Lock', 'Password', 'Updated 3 months ago'], ['Smartphone', 'Two-factor auth', 'Enabled'], ['Mail', 'Login alerts', 'On']].map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, v)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travel history"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Amalfi Coast by Vespa', 'Italy', 'May 2025', '★ 5.0'], ['Cyclades Island Hopper', 'Greece', 'Sep 2024', '★ 4.8'], ['Atlas Mountains & Marrakech', 'Morocco', 'Apr 2024', '★ 4.9'], ['Vietnam: Hanoi to Halong', 'Vietnam', 'Nov 2023', '★ 4.7']].map(([trip, country, date, rating], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 18,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, country, " \xB7 ", date)), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 13,
      color: 'var(--marigold-600)',
      fontWeight: 600
    }
  }, rating))))))))));
}
window.ClientDashboardScreen = ClientDashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ClientDashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact — 5 sections: header, contact+map+form, support channels, FAQ, global offices. window.ContactScreen.
function ContactScreen() {
  const {
    Button,
    Input,
    Select,
    Badge
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    topic: 'General enquiry',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [faq, setFaq] = React.useState(0);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  function submit(e) {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please tell us your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (form.message.trim().length < 10) er.message = 'A little more detail, please (10+ chars)';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  }
  const details = [['MapPin', 'Visit us', '24 Harbour Lane, Lisbon, Portugal'], ['Mail', 'Email', 'hello@wayfarer.travel'], ['Phone', 'Call', '+351 21 000 0000'], ['Clock', 'Hours', 'Mon–Sat · 9:00–18:00 WET']];
  const channels = [['MessageSquare', 'Live chat', 'Chat with our team', 'Mon–Sat, 9–18 WET'], ['LifeBuoy', 'Help center', 'Browse 200+ articles', 'Answers, anytime'], ['Plane', 'On-trip support', '24/7 while you travel', 'Every trip, included']];
  const faqs = [['How quickly will you reply?', 'We answer most messages within one business day — often much sooner during office hours.'], ['Can you help plan a custom trip?', 'Yes. Pick “Custom trip” above and tell us your dates and interests; a trip expert will design an itinerary with you.'], ['Do you offer group or private departures?', 'We do — private departures for groups of 6+ and tailored corporate retreats. Mention it in your message.']];
  const offices = [['Lisbon', 'HQ · Europe', 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=500&q=70&auto=format&fit=crop'], ['Kyoto', 'Asia desk', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=70&auto=format&fit=crop'], ['Santiago', 'Americas desk', 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=500&q=70&auto=format&fit=crop']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "We'd love to hear from you"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px 24px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      marginBottom: 24
    }
  }, details.map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    "data-map": "google",
    style: {
      position: 'relative',
      height: 260,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=900&q=70&auto=format&fit=crop",
    alt: "Map of Lisbon",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50% 50% 50% 0',
      transform: 'rotate(-45deg)',
      background: 'var(--clay-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(45deg)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 22,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      fontSize: 11,
      color: 'var(--text-muted)',
      background: 'var(--surface-card)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Google Maps placeholder"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 30,
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 32,
    color: "var(--success-500)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "Message sent!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Thanks, ", form.name.split(' ')[0], ". We'll reply within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    "data-form": "formspree",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    value: form.name,
    onChange: set('name'),
    error: errors.name,
    placeholder: "Jordan Rivera"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    error: errors.email,
    placeholder: "you@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Topic",
    value: form.topic,
    onChange: set('topic'),
    options: ['General enquiry', 'Booking help', 'Custom trip', 'Press & partnerships']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "wf-msg",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "wf-msg",
    value: form.message,
    onChange: set('message'),
    rows: 4,
    placeholder: "Tell us where you'd like to go\u2026",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${errors.message ? 'var(--error-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      resize: 'vertical',
      outline: 'none'
    }
  }), errors.message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--error-500)'
    }
  }, errors.message)), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true
  }, "Send message"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: 0
    }
  }, "We'll never share your details. Powered by Formspree.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px',
      textAlign: 'center'
    }
  }, "More ways to reach us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, channels.map(([ic, h, p, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-canvas)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 4px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      margin: '0 0 6px'
    }
  }, p), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '56px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px',
      textAlign: 'center'
    }
  }, "Before you write"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setFaq(faq === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '18px 20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'start',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: faq === i ? 'Minus' : 'Plus',
    size: 18,
    color: "var(--color-primary)"
  })), faq === i && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 20px 18px',
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px',
      textAlign: 'center'
    }
  }, "Find us around the world"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, offices.map(([city, role, img], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: city,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: '#fff'
    }
  }, city), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--stone-200)'
    }
  }, role)))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DashboardScreen.jsx
try { (() => {
// Booking-management dashboard: sidebar, stats, bookings table, messages. window.DashboardScreen.
function DashboardScreen({
  onNav,
  theme,
  onToggleTheme,
  dir,
  onToggleDir
}) {
  const {
    Badge,
    Avatar,
    Button,
    Tag
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [section, setSection] = React.useState('Overview');
  const mainRef = React.useRef(null);
  React.useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [section]);
  const [bookFilter, setBookFilter] = React.useState('All');
  const nav = [['Overview', 'LayoutDashboard'], ['Bookings', 'CalendarCheck'], ['Reports', 'BarChart3'], ['Travelers', 'Users'], ['Settings', 'Settings']];
  const stats = [['Upcoming trips', '6', 'CalendarCheck', 'pine'], ['New bookings', '24', 'TrendingUp', 'marigold'], ['Revenue (mo)', '$48.2k', 'Wallet', 'success'], ['Occupancy', '82%', 'Gauge', 'clay']];
  const bookings = [['WF-2K9X4', 'Jordan Rivera', 'Temples & Tea of Kyoto', 'Sep 14', 2, 'Confirmed', 'success'], ['WF-3L1Z8', 'Amira Haddad', 'Land of Fire & Ice', 'Sep 21', 4, 'Pending', 'warning'], ['WF-3M7Q2', 'Sam Okonkwo', 'Patagonia Wild Trek', 'Oct 5', 2, 'Confirmed', 'success'], ['WF-4P2R9', 'Lena Vogel', 'Atlas Mountains', 'Oct 12', 3, 'Cancelled', 'error'], ['WF-4T8W1', 'Diego Marín', 'Inca Trail', 'Nov 2', 2, 'Confirmed', 'success'], ['WF-5A2C6', 'Priya Nair', 'Serengeti Migration Safari', 'Nov 9', 2, 'Confirmed', 'success'], ['WF-5K8D3', 'Tom Becker', 'Cyclades Island Hopper', 'Nov 16', 5, 'Pending', 'warning'], ['WF-6B1F9', 'Yuki Tanaka', 'New Zealand South Island', 'Dec 1', 2, 'Confirmed', 'success']];
  const messages = [['Amira Haddad', 'Question about visa for Iceland trip', 'Hi! Do I need a visa as a UK citizen for the Iceland departure? Also, is the airport transfer included on arrival day?', '2h', true], ['Sam Okonkwo', 'Can I add a day in Santiago?', 'We\u2019d love to arrive a day early before the Patagonia trek. Can you help arrange the extra night and transfer?', '5h', true], ['Priya Nair', 'Dietary requirements', 'Just confirming you received my note about a nut allergy for the Serengeti trip. Thank you!', '1d', true], ['Lena Vogel', 'Thanks for the refund — all sorted!', 'Appreciate how quickly you handled the cancellation. We\u2019ll definitely book again next year.', '1d', false], ['Diego Marín', 'Packing list question', 'For the Inca Trail in November, would you recommend a 3-season or 4-season sleeping bag?', '2d', false]];
  const travelers = [['Jordan Rivera', 'jordan@email.com', 'United States', 14, 'Gold', 'success'], ['Amira Haddad', 'amira.h@email.com', 'United Kingdom', 6, 'Silver', 'neutral'], ['Sam Okonkwo', 'sam.ok@email.com', 'Nigeria', 9, 'Gold', 'success'], ['Priya Nair', 'priya.n@email.com', 'India', 4, 'Silver', 'neutral'], ['Diego Marín', 'diego.m@email.com', 'Spain', 11, 'Gold', 'success'], ['Yuki Tanaka', 'yuki.t@email.com', 'Japan', 3, 'Bronze', 'warning']];
  const shownBookings = bookFilter === 'All' ? bookings : bookings.filter(b => b[5] === bookFilter);
  const Panel = ({
    title,
    action,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, children));
  const BookingsTable = ({
    rows
  }) => isNarrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rows.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, b[1]), /*#__PURE__*/React.createElement(Badge, {
    tone: b[6]
  }, b[5])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      marginBottom: 6
    }
  }, b[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true
  }, b[0]), /*#__PURE__*/React.createElement("span", null, "Departs ", b[3]), /*#__PURE__*/React.createElement("span", null, b[4], " pax"))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'start',
      color: 'var(--text-muted)'
    }
  }, ['Ref', 'Traveler', 'Trip', 'Departs', 'Pax', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'start',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      padding: '12px 4px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((b, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      padding: '14px 4px',
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, b[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, b[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[4]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: b[6]
  }, b[5])))))));
  const RevenueChart = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Revenue \xB7 last 8 months",
    action: /*#__PURE__*/React.createElement("span", {
      className: "u-mono",
      style: {
        fontSize: 13,
        color: 'var(--success-500)',
        fontWeight: 600
      }
    }, "\u25B2 18%")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: 160
    }
  }, [['Feb', 38], ['Mar', 44], ['Apr', 41], ['May', 52], ['Jun', 60], ['Jul', 72], ['Aug', 66], ['Sep', 84]].map(([m, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v * 1.6}px`,
      borderRadius: '6px 6px 0 0',
      background: i === 7 ? 'var(--color-accent)' : 'var(--color-primary)',
      opacity: i === 7 ? 1 : 0.55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, m)))));
  const TasksPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Tasks"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Confirm guide for Inca Trail', 'Due today', 'clay'], ['Refund Lena Vogel', 'Due tomorrow', 'warning'], ['Approve 3 new reviews', 'This week', 'pine'], ['Update Iceland itinerary', 'This week', 'pine']].map(([t, due, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, due)))));
  const DeparturesPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Upcoming departures"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Temples & Tea of Kyoto', 'Sep 14', 8, 12], ['Land of Fire & Ice', 'Sep 21', 11, 14], ['Patagonia Wild Trek', 'Oct 5', 6, 10]].map(([trip, date, filled, cap], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, String(date).split(' ')[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--color-primary)',
      textTransform: 'uppercase'
    }
  }, String(date).split(' ')[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--surface-sunk)',
      marginTop: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${filled / cap * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, filled, "/", cap)))));
  const TopTripsPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Top-selling trips this month"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Temples & Tea of Kyoto', 'Japan', 42, '$77.3k'], ['Inca Trail to Machu Picchu', 'Peru', 38, '$75.2k'], ['Patagonia Wild Trek', 'Chile', 29, '$69.3k'], ['Serengeti Migration Safari', 'Tanzania', 18, '$62.1k']].map(([trip, country, sales, rev], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-muted)',
      width: 22
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, country, " \xB7 ", sales, " bookings")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${sales / 42 * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 64,
      textAlign: 'end'
    }
  }, rev)))));
  const StatsRow = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, stats.map(([l, v, ic, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 13,
      color: `var(--${tone === 'pine' ? 'pine-700' : tone === 'marigold' ? 'marigold-600' : tone === 'success' ? 'success-500' : 'clay-500'})`
    })
  }, " ")), /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))));
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setNavOpen(false);
  }, [section]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
      overflow: 'hidden'
    }
  }, isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setNavOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 79
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: isNarrow ? {
      position: 'fixed',
      top: 0,
      insetInlineStart: 0,
      width: 280,
      height: '100vh',
      zIndex: 80,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16,
      transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
    } : {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '6px 8px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10px 10px',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Manage"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([label, ic]) => {
    const on = section === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setSection(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        minHeight: 44,
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 15,
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'auto',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, isNarrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '0 4px 8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 18
  }), theme === 'dark' ? 'Light' : 'Dark'), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 12px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--text-body)',
      fontSize: 15,
      width: '100%',
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 19,
    color: "var(--text-muted)"
  }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: () => setNavOpen(true),
    "aria-label": "Menu",
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section), !isNarrow && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '2px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Welcome back, Mara \u2014 here's what's happening."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexShrink: 0
    }
  }, !isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), !isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    title: dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL',
    style: {
      height: 42,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 700,
      fontSize: 13
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR'), !isNarrow && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16,
      color: "#fff"
    }),
    onClick: () => setSection('Bookings')
  }, "New booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingInlineStart: isNarrow ? 0 : 8,
      borderInlineStart: isNarrow ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mara Okafor",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop",
    size: "md"
  }), !isNarrow && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, "Mara Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Admin"))))), /*#__PURE__*/React.createElement("main", {
    ref: mainRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement(Panel, {
    title: "Recent bookings",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Bookings'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, "View all")
  }, /*#__PURE__*/React.createElement(BookingsTable, {
    rows: bookings.slice(0, 5)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DeparturesPanel, null), /*#__PURE__*/React.createElement(Panel, {
    title: "Bookings by region"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13.5,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, region), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement(TasksPanel, null)), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Bookings' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['All', 'Confirmed', 'Pending', 'Cancelled'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: bookFilter === f,
    onClick: () => setBookFilter(f)
  }, f)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 15,
      color: "#fff"
    }),
    onClick: () => setSection('Bookings')
  }, "New booking"))), /*#__PURE__*/React.createElement(Panel, {
    title: `All bookings · ${shownBookings.length}`
  }, /*#__PURE__*/React.createElement(BookingsTable, {
    rows: shownBookings
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['Confirmed', '5', 'success', 'CircleCheck'], ['Pending', '2', 'warning', 'Clock'], ['Cancelled', '1', 'error', 'CircleX']].map(([l, v, tone, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: `var(--${tone}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: `var(--${tone}-500)`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l)))))), section === 'Reports' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['DollarSign', '$412k', 'Revenue YTD'], ['TrendingUp', '+18%', 'vs last year'], ['Receipt', '$1,920', 'Avg. booking'], ['Star', '4.9', 'Avg. rating']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Bookings by region"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13.5,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, region), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
    }
  })))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Booking channels"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Website', '$248k', 60], ['Referral', '$103k', 25], ['Partners', '$41k', 10], ['Repeat guests', '$20k', 5]].map(([ch, rev, pct], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, ch), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 56,
      textAlign: 'end'
    }
  }, rev)))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Travelers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['Users', '1,284', 'Total travelers'], ['UserPlus', '38', 'New this month'], ['Award', '312', 'Gold members'], ['Repeat', '46%', 'Repeat rate']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travelers",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => window.print(),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, "Export CSV")
  }, isNarrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, travelers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t[0],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t[0]), /*#__PURE__*/React.createElement(Badge, {
    tone: t[5]
  }, t[4])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, t[1]), /*#__PURE__*/React.createElement("span", null, t[2]), /*#__PURE__*/React.createElement("span", {
    className: "u-mono"
  }, t[3], " trips"))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Name', 'Email', 'Country', 'Trips', 'Tier'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'start',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '12px 4px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, travelers.map((t, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t[0],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t[0]))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[2]), /*#__PURE__*/React.createElement("td", {
    className: "u-mono",
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t[5]
  }, t[4])))))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Settings' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Company profile"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Company', 'Wayfarer Travel Co.'], ['Support email', 'hello@wayfarer.travel'], ['Phone', '+351 21 000 0000'], ['Base currency', 'USD ($)'], ['Timezone', 'WET · Lisbon']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 4 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Booking settings"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Free cancellation window', '30 days'], ['Auto-confirm bookings', 'On'], ['Deposit required', 'No'], ['Max group size', '14 travelers'], ['Booking fee', '4%']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Team"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Mara Okafor', 'Owner'], ['Liam Chen', 'Trip manager'], ['Sofia Reyes', 'Support'], ['Diego Marín', 'Partnerships']].map(([n, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, role))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['New booking alerts', true], ['Cancellation alerts', true], ['Daily summary email', true], ['Low availability warnings', false], ['Marketing reports', false]].map(([l, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--border-default)',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff'
    }
  })))))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Site footer with newsletter signup + social. Exposes window.Footer.
function Footer({
  onNav
}) {
  const {
    Button,
    Input
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const cols = [['Explore', [['Home — Editorial', 'home2'], ['Book Now', 'book'], ['Services', 'services'], ['Gallery', 'gallery']]], ['Company', [['About', 'about'], ['Contact', 'contact'], ['Dashboard', 'dashboard']]], ['Support', [['Help center', 'contact'], ['Dashboard', 'dashboard'], ['Coming soon', 'soon'], ['404 page', '404']]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--stone-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--stone-50)'
    }
  }, "Get trip inspiration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-300)',
      marginTop: 4
    }
  }, "New journeys and seasonal offers, once a month. No spam.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      minWidth: 320
    },
    "data-newsletter": "mailchimp"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    type: "submit",
    style: { height: 46, alignSelf: 'stretch' }
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 32px',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "38",
    height: "38",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--stone-50)'
    }
  }, "Wayfarer")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--stone-300)',
      maxWidth: 260,
      margin: '0 0 16px'
    }
  }, "Small-group adventures led by local guides, in 40+ countries. Go further."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [['Instagram', 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.95-11.4a1.58 1.58 0 1 1-1.58-1.58 1.58 1.58 0 0 1 1.58 1.58Z'], ['Facebook', 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z'], ['Twitter', 'M18.9 2.5h3.3l-7.2 8.24L23.5 21.5h-6.6l-5.18-6.77-5.92 6.77H2.5l7.7-8.8L1.5 2.5h6.77l4.68 6.19L18.9 2.5Zm-1.16 17h1.83L7.34 4.4H5.38L17.74 19.5Z'], ['Youtube', 'M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z']].map(([label, d]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--stone-200)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })))))), cols.map(([head, items], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)',
      marginBottom: 16
    }
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(([label, dest], j) => /*#__PURE__*/React.createElement("button", {
    key: j,
    onClick: () => onNav(dest),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'start',
      padding: 0,
      fontSize: 14,
      color: 'var(--stone-200)',
      fontFamily: 'var(--font-sans)'
    }
  }, label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      fontSize: 13,
      color: 'var(--stone-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Wayfarer Travel Co."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryScreen.jsx
try { (() => {
// Gallery — 5 sections: intro+filter, masonry grid, stats band, share/Instagram, CTA (+ lightbox). window.GalleryScreen.
function GalleryScreen({
  onNav
}) {
  const {
    Tag,
    Button
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const photos = [{
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=70&auto=format&fit=crop',
    cat: 'Asia',
    cap: 'Kyoto, Japan'
  }, {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=70&auto=format&fit=crop',
    cat: 'Americas',
    cap: 'Torres del Paine, Chile'
  }, {
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=70&auto=format&fit=crop',
    cat: 'Europe',
    cap: 'Reykjavík, Iceland'
  }, {
    src: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=70&auto=format&fit=crop',
    cat: 'Africa',
    cap: 'Marrakech, Morocco'
  }, {
    src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=70&auto=format&fit=crop',
    cat: 'Americas',
    cap: 'Machu Picchu, Peru'
  }, {
    src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=70&auto=format&fit=crop',
    cat: 'Asia',
    cap: 'Arashiyama bamboo'
  }, {
    src: 'https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=800&q=70&auto=format&fit=crop',
    cat: 'Americas',
    cap: 'Patagonian peaks'
  }, {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=70&auto=format&fit=crop',
    cat: 'Europe',
    cap: 'Coastal road'
  }, {
    src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=70&auto=format&fit=crop',
    cat: 'Asia',
    cap: 'Lantern street'
  }];
  const cats = ['All', 'Asia', 'Europe', 'Americas', 'Africa'];
  const [cat, setCat] = React.useState('All');
  const [active, setActive] = React.useState(null);
  const shown = cat === 'All' ? photos : photos.filter(p => p.cat === cat);
  const insta = photos.slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "From the road"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 10px'
    }
  }, "Gallery"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-body)',
      maxWidth: 540,
      margin: '0 auto 22px',
      lineHeight: 1.6
    }
  }, "Real moments from real Wayfarer journeys \u2014 captured by our guides and travelers along the way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columnGap: 16,
      columnWidth: 280
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(p),
    style: {
      display: 'block',
      width: '100%',
      border: 'none',
      padding: 0,
      marginBottom: 16,
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-sunk)',
      breakInside: 'avoid',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.cap,
    loading: "lazy",
    style: {
      width: '100%',
      display: 'block',
      aspectRatio: i % 3 === 0 ? '3 / 4' : '4 / 3',
      objectFit: 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      textAlign: 'center'
    }
  }, [['250k+', 'Photos shared'], ['40+', 'Countries captured'], ['9,400', 'Travelers'], ['4.9', 'Avg. trip rating']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--marigold-300)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-200)',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Tag us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, "#GoFurther on Instagram")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 12
    }
  }, insta.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setActive(p);
    },
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '1',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.cap,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(6,21,18,0.3)',
      opacity: 0,
      transition: 'opacity var(--dur-base)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Instagram",
    size: 22,
    color: "#fff"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: '44px 40px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "Make memories of your own"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "Find a trip and start filling your own gallery."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services')
  }, "Browse trips"))), active && /*#__PURE__*/React.createElement("div", {
    onClick: () => setActive(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(6,21,18,0.86)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(null),
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 22,
      right: 22,
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.14)',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "X",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      maxWidth: 900
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    src: active.src.replace('w=800', 'w=1400'),
    alt: active.cap,
    style: {
      width: '100%',
      maxHeight: '78vh',
      objectFit: 'contain',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: 'var(--stone-100)',
      textAlign: 'center',
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      fontSize: 18
    }
  }, active.cap))));
}
window.GalleryScreen = GalleryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Shared site header: mandatory booking menu, mobile hamburger, theme + RTL toggles.
// Exposes window.Header and window.useMediaQuery.
function useMediaQuery(query) {
  const [match, setMatch] = React.useState(() => window.matchMedia(query).matches);
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const fn = () => setMatch(m.matches);
    m.addEventListener('change', fn);
    fn();
    return () => m.removeEventListener('change', fn);
  }, [query]);
  return match;
}
window.useMediaQuery = useMediaQuery;

// Mandatory menu structure for a Booking/Reservation template.
// "Home" is rendered separately as a dropdown (Home 1 / Home 2).
const WF_NAV = [['Services', 'services'], ['Gallery', 'gallery'], ['About', 'about'], ['Contact', 'contact']];
const WF_HOMES = [['Home 1', 'home'], ['Home 2', 'home2']];
const WF_DASH = [['Traveler', 'account'], ['Admin', 'dashboard']];

// Animated "Dashboards" dropdown (mirrors HomeMenu), placed after Contact.
function DashMenu({
  onNav,
  active,
  isMobile
}) {
  const Icon = window.Icon;
  const [open, setOpen] = React.useState(false);
  const isDash = active === 'account' || active === 'dashboard';
  const closeT = React.useRef(null);
  const openNow = () => {
    clearTimeout(closeT.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeT.current = setTimeout(() => setOpen(false), 120);
  };
  if (isMobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, WF_DASH.map(([label, dest]) => /*#__PURE__*/React.createElement("button", {
      key: dest,
      onClick: () => onNav(dest),
      "aria-current": active === dest ? 'page' : undefined,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '14px 8px',
        minHeight: 44,
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: active === dest ? 700 : 500,
        color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
        textAlign: 'start'
      }
    }, label)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: openNow,
    onMouseLeave: closeSoon
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "true",
    "aria-expanded": open,
    "aria-current": isDash ? 'page' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: open ? 'var(--surface-sunk)' : 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 13px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: isDash ? 700 : 500,
      color: isDash ? 'var(--color-primary)' : 'var(--text-body)'
    }
  }, "Dashboards ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 16,
    color: "currentColor",
    style: {
      transition: 'transform var(--dur-fast) var(--ease-out)',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      insetInlineEnd: 0,
      minWidth: 168,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      transformOrigin: 'top',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      zIndex: 60
    }
  }, WF_DASH.map(([label, dest]) => {
    const on = active === dest;
    return /*#__PURE__*/React.createElement("button", {
      key: dest,
      role: "menuitem",
      onClick: () => {
        onNav(dest);
        setOpen(false);
      },
      style: {
        background: on ? 'var(--color-primary-soft)' : 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        textAlign: 'start',
        width: '100%',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--color-primary)' : 'var(--text-body)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--surface-sunk)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'none';
      }
    }, label);
  })));
}

// Animated "Home" dropdown used in the navbar on every page.
function HomeMenu({
  onNav,
  active,
  isMobile
}) {
  const Icon = window.Icon;
  const [open, setOpen] = React.useState(false);
  const isHome = active === 'home' || active === 'home2';
  const closeT = React.useRef(null);
  const openNow = () => {
    clearTimeout(closeT.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeT.current = setTimeout(() => setOpen(false), 120);
  };
  if (isMobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, WF_HOMES.map(([label, dest]) => /*#__PURE__*/React.createElement("button", {
      key: dest,
      onClick: () => onNav(dest),
      "aria-current": active === dest ? 'page' : undefined,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '14px 8px',
        minHeight: 44,
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: active === dest ? 700 : 500,
        color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
        textAlign: 'start'
      }
    }, label)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: openNow,
    onMouseLeave: closeSoon
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "true",
    "aria-expanded": open,
    "aria-current": isHome ? 'page' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: open ? 'var(--surface-sunk)' : 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 13px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: isHome ? 700 : 500,
      color: isHome ? 'var(--color-primary)' : 'var(--text-body)'
    }
  }, "Home ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 16,
    color: "currentColor",
    style: {
      transition: 'transform var(--dur-fast) var(--ease-out)',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      minWidth: 168,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      transformOrigin: 'top',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      zIndex: 60
    }
  }, WF_HOMES.map(([label, dest]) => {
    const on = active === dest;
    return /*#__PURE__*/React.createElement("button", {
      key: dest,
      role: "menuitem",
      onClick: () => {
        onNav(dest);
        setOpen(false);
      },
      style: {
        background: on ? 'var(--color-primary-soft)' : 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        textAlign: 'start',
        width: '100%',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--color-primary)' : 'var(--text-body)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--surface-sunk)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'none';
      }
    }, label);
  })));
}
function Header({
  onNav,
  active,
  theme,
  onToggleTheme,
  dir,
  onToggleDir
}) {
  const {
    Button
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isMobile = window.useMediaQuery('(max-width: 1023px)');
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(false);
  }, [active]);
  const navBtn = (label, dest) => /*#__PURE__*/React.createElement("button", {
    key: dest + label,
    onClick: () => onNav(dest),
    "aria-current": active === dest ? 'page' : undefined,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: isMobile ? '14px 8px' : '10px 13px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: active === dest ? 700 : 500,
      color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
      textAlign: 'start',
      width: isMobile ? '100%' : 'auto'
    },
    onMouseEnter: e => {
      if (active !== dest) e.currentTarget.style.background = 'var(--surface-sunk)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'none';
    }
  }, label);
  const toggles = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    title: "Toggle theme",
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDir,
    "aria-label": "Toggle text direction",
    title: dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL (Arabic/Hebrew)',
    style: {
      height: 44,
      padding: '0 12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontWeight: 700,
      fontSize: 13
    }
  }, dir === 'rtl' ? 'RTL' : 'LTR'));
  const accountMenu = null;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--surface-canvas) 86%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    "aria-label": "Wayfarer home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "38",
    height: "38",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), !isMobile && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(HomeMenu, {
    onNav: onNav,
    active: active,
    isMobile: false
  }), WF_NAV.map(([l, d]) => navBtn(l, d)), /*#__PURE__*/React.createElement(DashMenu, {
    onNav: onNav,
    active: active,
    isMobile: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, !isMobile && toggles, !isMobile && /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('login'),
    style: {
      height: 44,
      borderRadius: 'var(--radius-md)',
      padding: '0 20px'
    }
  }, "Login"), accountMenu, isMobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'X' : 'Menu',
    size: 22
  })))), isMobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-canvas)',
      padding: '10px 20px 18px',
      maxHeight: 'calc(100vh - 72px)',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary mobile",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(HomeMenu, {
    onNav: onNav,
    active: active,
    isMobile: true
  }), WF_NAV.map(([l, d]) => navBtn(l, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 8,
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '0 8px 4px'
    }
  }, "Dashboards"), /*#__PURE__*/React.createElement(DashMenu, {
    onNav: onNav,
    active: active,
    isMobile: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 12
    }
  }, toggles, /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('login')
  }, "Login")))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home screen — 7 sections: hero+search, value props, featured trips, destinations, how it works, testimonials, CTA. window.HomeScreen.
function HomeScreen({
  onNav,
  onOpenTrip
}) {
  const {
    Button,
    Tag,
    TripCard,
    Input,
    Select,
    Avatar,
    Rating
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const reviews = window.WF_REVIEWS;
  const [cat, setCat] = React.useState('All');
  const cats = [['All', 'Compass'], ['Adventure', 'Mountain'], ['Culture', 'Landmark'], ['Beaches', 'Waves'], ['Food', 'UtensilsCrossed'], ['Wildlife', 'Bird']];
  const shown = (cat === 'All' ? trips : trips.filter(t => t.style.includes(cat))).slice(0, 6);
  const dests = [['Japan', '12 trips', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=70&auto=format&fit=crop'], ['Chile', '8 trips', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&auto=format&fit=crop'], ['Iceland', '6 trips', 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=70&auto=format&fit=crop'], ['Morocco', '9 trips', 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=70&auto=format&fit=crop'], ['Peru', '7 trips', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70&auto=format&fit=crop'], ['Italy', '11 trips', 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?w=600&q=70&auto=format&fit=crop']];
  const sectionHead = (eyebrow, title, action) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, title)), action);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=75&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(6,53,42,0.78) 0%, rgba(6,53,42,0.45) 55%, rgba(6,53,42,0.2) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 28px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      padding: '32px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "40+ countries \xB7 Local guides"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 62,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      fontWeight: 600,
      color: '#fff',
      margin: '14px 0 0'
    }
  }, "Go further than", /*#__PURE__*/React.createElement("br", null), "the map."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--stone-100)',
      margin: '18px 0 0',
      maxWidth: 520
    }
  }, "Handcrafted small-group adventures, led by people who call these places home.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      padding: 14,
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr auto',
      gap: 12,
      alignItems: 'end',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Where to?",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MapPin",
      size: 18
    }),
    placeholder: "Search destinations"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "When",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Calendar",
      size: 18
    }),
    options: ['Anytime', 'This summer', 'Autumn 2026', 'Winter 2026']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Travelers",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Users",
      size: 18
    }),
    options: ['2 adults', '2 adults · 1 child', 'Family (2+2)', 'Solo']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 18,
      color: "var(--pine-900)"
    })
  }, "Search")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, [['Award', '4.9 / 5', 'from 9,400+ travelers'], ['Users', '12 max', 'small-group sizes'], ['MapPinned', '40+', 'countries, all guided'], ['ShieldCheck', 'Free', 'cancellation · 30 days']].map(([ic, big, sub], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, sub)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 16px'
    }
  }, sectionHead('Featured journeys', 'Trips travelers love right now', /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('services'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, cats.map(([c, ic]) => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16,
      color: cat === c ? '#fff' : 'var(--text-muted)'
    })
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    onClick: () => onOpenTrip(t.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 16px'
    }
  }, sectionHead('Where to next', 'Popular destinations'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 16
    }
  }, dests.map(([name, n, img], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onNav('services'),
    style: {
      position: 'relative',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '3 / 4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--stone-200)'
    }
  }, n)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 16px'
    }
  }, sectionHead('Simple by design', 'How Wayfarer works'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, [['Search', '01', 'Find your trip', 'Browse by destination, style, or season. Every itinerary is small-group and guide-led.', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop'], ['CalendarCheck', '02', 'Book in minutes', 'Pick a departure, add travelers, and reserve with no payment due today.', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&q=72&auto=format&fit=crop'], ['Plane', '03', 'Go further', 'Meet your local guide and a handful of fellow travelers — the rest is taken care of.', 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop'], ['Heart', '04', 'Come home changed', 'Return with new stories, new friends, and a fresh perspective — then start dreaming of the next one.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=72&auto=format&fit=crop']].map(([ic, n, h, p, img], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: h,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,53,42,0.55), rgba(6,53,42,0) 55%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      fontSize: 15,
      fontWeight: 700,
      color: '#fff',
      background: 'rgba(6,53,42,0.55)',
      backdropFilter: 'blur(4px)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Step ", n)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '36px 24px 26px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: -28,
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      border: '3px solid var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    color: "var(--pine-900)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 16px'
    }
  }, sectionHead('Traveler stories', 'Loved by people who go further'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-xs)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: r.rating,
    size: "sm",
    showValue: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\u201C", r.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: r.photo,
    name: r.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, r.date))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      padding: '64px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=72&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(6,53,42,0.78), rgba(6,53,42,0.9))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '0 0 14px'
    }
  }, "Your next adventure is waiting."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--stone-100)',
      margin: '0 0 28px',
      maxWidth: 520,
      marginInline: 'auto'
    }
  }, "Join 9,400+ travelers who've gone further with a local guide by their side."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services')
  }, "Browse all trips"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNav('about')
  }, "Why Wayfarer"))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeTwoScreen.jsx
try { (() => {
// Home v2 — editorial / magazine style, deliberately different from HomeScreen.
// 7 sections: split hero, promise strip, editor's pick spotlight, region index,
// journal stories, guide spotlight, newsletter. window.HomeTwoScreen.
function HomeTwoScreen({
  onNav,
  onOpenTrip
}) {
  const {
    Button,
    Badge,
    Rating,
    Avatar
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const pick = trips.find(t => t.id === 'peru') || trips[0];
  const regionData = [{
    name: 'Asia',
    count: 4,
    blurb: 'Temple towns, street food, and mountain trails.',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=72&auto=format&fit=crop'
  }, {
    name: 'Europe',
    count: 3,
    blurb: 'Fjords, coastlines, and old-world cities.',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=72&auto=format&fit=crop'
  }, {
    name: 'Americas',
    count: 2,
    blurb: 'Andes peaks, patagonian wild, and ancient paths.',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1000&q=72&auto=format&fit=crop'
  }, {
    name: 'Africa',
    count: 2,
    blurb: 'Migration plains, deserts, and souks.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=72&auto=format&fit=crop'
  }, {
    name: 'Oceania',
    count: 1,
    blurb: 'Glaciers, fjords, and Middle-earth roads.',
    img: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1000&q=72&auto=format&fit=crop'
  }];
  const [activeRegion, setActiveRegion] = React.useState(0);
  const journal = [{
    cat: 'Field notes',
    title: 'Why we cap every trip at twelve travelers',
    excerpt: 'The math of a great group trip is smaller than you think — here\u2019s what changes when the group shrinks.',
    read: '5 min',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop'
  }, {
    cat: 'Destinations',
    title: 'A first-timer\u2019s guide to the Inca Trail',
    excerpt: 'Altitude, packing, and the dawn moment at the Sun Gate that makes every step worth it.',
    read: '8 min',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=700&q=72&auto=format&fit=crop'
  }, {
    cat: 'Guides',
    title: 'Meet the people who lead the way',
    excerpt: 'From Kyoto to Patagonia, our guides share what travelers always get wrong — and right.',
    read: '6 min',
    img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop'
  }];
  const region = regionData[activeRegion];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Wayfarer \xB7 est. 2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '18px 0 0'
    }
  }, "The world,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-primary)'
    }
  }, "well\u2011guided.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '24px 0 0',
      maxWidth: 460
    }
  }, "We design small-group journeys with the people who know each place best \u2014 then hand you the keys to a deeper kind of travel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('services')
  }, "Explore journeys"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('about'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18,
      color: "var(--color-primary)"
    })
  }, "Our story")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 44,
      paddingTop: 28,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['40+', 'countries'], ['9.4k', 'travelers'], ['4.9★', 'avg. rating']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      letterSpacing: '0.04em'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 540
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '74%',
      height: 360,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=74&auto=format&fit=crop",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '56%',
      height: 280,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '5px solid var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=74&auto=format&fit=crop",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: 8,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Compass",
    size: 22,
    color: "var(--pine-900)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "Local guides"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "in every destination"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 28px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, [['Rooted in place', 'Guides born and raised where they lead — not flown in for the season.'], ['Small by principle', 'Twelve travelers, maximum. Always. It changes everything about a trip.'], ['Care, end to end', 'Free cancellation, fair local pay, and 24/7 support while you travel.']].map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--clay-400)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Editor's pick"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, "This month, we're dreaming of Peru"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 0,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 440
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: pick.image,
    alt: pick.title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "marigold",
    variant: "solid"
  }, pick.badge || 'Featured'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      padding: '40px 38px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-muted)',
      fontSize: 15,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 18,
    color: "var(--clay-400)"
  }), pick.location), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.1,
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, pick.title), /*#__PURE__*/React.createElement(Rating, {
    value: pick.rating,
    reviews: pick.reviews
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '16px 0 22px'
    }
  }, pick.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 26
    }
  }, [['Clock', pick.duration], ['Users', pick.group], ['Activity', pick.level]].map(([ic, v], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15,
    color: "var(--color-primary)"
  }), v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "from"), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "$", pick.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "/ person")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onOpenTrip(pick.id)
  }, "View this trip"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Where we go"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 28px'
    }
  }, "Explore by region"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 40,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, regionData.map((r, i) => {
    const on = i === activeRegion;
    return /*#__PURE__*/React.createElement("button", {
      key: r.name,
      onMouseEnter: () => setActiveRegion(i),
      onClick: () => onNav('services'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        textAlign: 'start',
        background: 'none',
        border: 'none',
        borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)',
        padding: '22px 8px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "u-mono",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: on ? 'var(--clay-400)' : 'var(--text-muted)',
        width: 28
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        fontWeight: 600,
        color: on ? 'var(--color-primary)' : 'var(--text-strong)',
        transition: 'color var(--dur-fast)'
      }
    }, r.name), on && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)',
        marginTop: 2
      }
    }, r.blurb)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, r.count, " trips"), /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 20,
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 420,
      boxShadow: 'var(--shadow-md)'
    }
  }, regionData.map((r, i) => /*#__PURE__*/React.createElement("img", {
    key: r.name,
    src: r.img,
    alt: r.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: i === activeRegion ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: '#fff'
    }
  }, region.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-100)'
    }
  }, region.count, " guided journeys"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "The journal"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, "Stories from the road")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('about'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "All stories ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 16,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, journal.map((j, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xs)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    },
    onClick: () => onNav('about')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 2',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: j.img,
    alt: j.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pine"
  }, j.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, j.read, " read")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 600,
      lineHeight: 1.25,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, j.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, j.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 16,
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read story ", /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 15,
    color: "var(--color-primary)"
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-primary-soft)',
      borderRadius: 'var(--radius-xl)',
      padding: '44px 48px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=72&auto=format&fit=crop",
    alt: "Mara Okafor",
    style: {
      width: 180,
      height: 220,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "Quote",
    size: 40,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      lineHeight: 1.5,
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: '8px 0 18px'
    }
  }, "A place tells you its story slowly. My job is to give you the time, and the company, to actually hear it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Mara Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Founder & lead guide \xB7 9 years with Wayfarer")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-xl)',
      padding: '56px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--stone-50)',
      margin: '0 0 12px'
    }
  }, "Travel notes, once a month."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--stone-200)',
      margin: '0 auto 28px',
      maxWidth: 480
    }
  }, "New journeys, guide interviews, and the occasional well-timed deal. No noise."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 440,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "you@email.com",
    style: {
      flex: 1,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      fontSize: 16,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    type: "submit"
  }, "Subscribe")))));
}
window.HomeTwoScreen = HomeTwoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeTwoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MiscScreens.jsx
try { (() => {
// 404 + Coming Soon pages. Exposes window.NotFoundScreen, window.ComingSoonScreen.
function NotFoundScreen({
  onNav
}) {
  const {
    Button
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const links = [['Compass', 'All trips', 'services'], ['Image', 'Gallery', 'gallery'], ['Info', 'About us', 'about'], ['Mail', 'Contact', 'contact']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 'calc(70vh - 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px 40px 24px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 520,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "56",
    height: "56",
    alt: "",
    style: {
      margin: '0 auto 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 96,
      fontWeight: 600,
      color: 'var(--color-primary)',
      lineHeight: 1,
      letterSpacing: '-0.04em'
    }
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '12px 0 10px'
    }
  }, "You've wandered off the map."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "The page you're looking for has packed up and moved on. Let's get you back to familiar trails."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('home'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Home",
      size: 18,
      color: "#fff"
    })
  }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('services'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Compass",
      size: 18,
      color: "var(--color-primary)"
    })
  }, "Browse trips")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '0 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 18
    }
  }, "Or try one of these"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, links.map(([ic, label, dest], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onNav(dest),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '22px 14px',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, label))))));
}
window.NotFoundScreen = NotFoundScreen;
function ComingSoonScreen({
  onNav
}) {
  const {
    Button,
    Input
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [sent, setSent] = React.useState(false);
  // simple countdown to a fixed future date (demo)
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 42, []);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000),
    h = Math.floor(diff / 3600000) % 24,
    m = Math.floor(diff / 60000) % 60,
    s = Math.floor(diff / 1000) % 60;
  const units = [[d, 'Days'], [h, 'Hours'], [m, 'Mins'], [s, 'Secs']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=75&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(6,53,42,0.72), rgba(6,53,42,0.88))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: '#fff',
      padding: 40,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "New for 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      margin: '14px 0 12px'
    }
  }, "Antarctica is coming."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--stone-100)',
      margin: '0 0 32px'
    }
  }, "Our most ambitious expedition yet. Join the waitlist to be first in line when bookings open."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 14,
      marginBottom: 32
    }
  }, units.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minWidth: 78,
      background: 'rgba(255,255,255,0.12)',
      backdropFilter: 'blur(6px)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 34,
      fontWeight: 600
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--stone-200)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, l)))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(255,255,255,0.14)',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 20,
    color: "#fff"
  }), " You're on the list \u2014 see you down south.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 420,
      margin: '0 auto',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    type: "submit"
  }, "Join waitlist")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--stone-200)',
      cursor: 'pointer',
      fontSize: 14,
      textDecoration: 'underline'
    }
  }, "Back to Wayfarer"))));
}
window.ComingSoonScreen = ComingSoonScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MiscScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
// Services — 6 sections: hero, trip styles, listing (filters+grid+skeleton), why book, FAQ, CTA. window.ServicesScreen.
function ServicesScreen({
  onOpenTrip,
  onNav
}) {
  const {
    TripCard,
    Tag,
    Checkbox,
    Select,
    Button
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const loading = window.useFakeLoad(800);
  const [region, setRegion] = React.useState('All');
  const [styles, setStyles] = React.useState({});
  const [difficulty, setDifficulty] = React.useState({});
  const [duration, setDuration] = React.useState({});
  const [price, setPrice] = React.useState({});
  const [extras, setExtras] = React.useState({});
  const [faq, setFaq] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const perPage = 6;
  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];
  const allStyles = ['Adventure', 'Culture', 'Food', 'Beaches', 'Wildlife'];
  const durationBuckets = [['Up to 5 days', d => d <= 5], ['6–8 days', d => d >= 6 && d <= 8], ['9+ days', d => d >= 9]];
  const priceBuckets = [['Under $1,500', p => p < 1500], ['$1,500–$2,500', p => p >= 1500 && p <= 2500], ['$2,500+', p => p > 2500]];
  const clearAll = () => {
    setStyles({});
    setDifficulty({});
    setDuration({});
    setPrice({});
    setExtras({});
  };
  const activeCount = [styles, difficulty, duration, price, extras].reduce((n, o) => n + Object.values(o).filter(Boolean).length, 0);
  const activeStyles = Object.keys(styles).filter(k => styles[k]);
  const parseDays = s => parseInt(String(s), 10) || 0;
  let shown = trips.filter(t => region === 'All' || t.region === region);
  if (activeStyles.length) shown = shown.filter(t => activeStyles.some(s => t.style.includes(s)));
  const activeDiff = Object.keys(difficulty).filter(k => difficulty[k]);
  if (activeDiff.length) shown = shown.filter(t => activeDiff.includes(t.level));
  const activeDur = durationBuckets.filter(([l]) => duration[l]);
  if (activeDur.length) shown = shown.filter(t => activeDur.some(([, fn]) => fn(parseDays(t.duration))));
  const activePrice = priceBuckets.filter(([l]) => price[l]);
  if (activePrice.length) shown = shown.filter(t => activePrice.some(([, fn]) => fn(t.price)));
  if (extras['Free cancellation']) {/* all trips qualify in this demo */}
  if (extras['Small group (≤10)']) shown = shown.filter(t => parseInt(t.group.replace(/\D/g, ''), 10) <= 10);
  const totalPages = Math.max(1, Math.ceil(shown.length / perPage));
  const curPage = Math.min(page, totalPages);
  const paged = shown.slice((curPage - 1) * perPage, curPage * perPage);
  // reset to page 1 whenever filters change
  React.useEffect(() => {
    setPage(1);
  }, [region, JSON.stringify(styles), JSON.stringify(difficulty), JSON.stringify(duration), JSON.stringify(price), JSON.stringify(extras)]);
  const tripStyles = [['Mountain', 'Adventure', 'Treks, climbs & wild trails'], ['Landmark', 'Culture', 'History, art & local life'], ['UtensilsCrossed', 'Food & wine', 'Markets, cooking & tastings'], ['Waves', 'Coast & islands', 'Beaches, sailing & sun'], ['Bird', 'Wildlife', 'Safari & nature up close'], ['Users', 'Family', 'Trips that work for all ages']];
  const faqs = [['How big are the groups?', 'Every Wayfarer trip is capped between 10 and 14 travelers, so you move easily and get real time with your guide.'], ['What\u2019s included in the price?', 'Accommodation, your local guide, listed activities, and most breakfasts. Flights and travel insurance are extra.'], ['Can I cancel?', 'Yes — free cancellation up to 30 days before departure, and no payment is due when you reserve.'], ['Are the trips suitable for solo travelers?', 'Absolutely. Around half of our travelers come solo; the small-group format makes it easy to connect.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '34px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Our services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '6px 0 16px'
    }
  }, "Guided trips & experiences"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, regions.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: region === r,
    onClick: () => setRegion(r)
  }, r))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "Browse by trip style"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, tripStyles.map(([ic, h, p], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onNav && onNav('services'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textAlign: 'start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'grid',
      gridTemplateColumns: '264px 1fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "SlidersHorizontal",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Filters"), activeCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-on-primary)',
      background: 'var(--color-primary)',
      borderRadius: 'var(--radius-pill)',
      minWidth: 20,
      height: 20,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 6px'
    }
  }, activeCount), activeCount > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: clearAll,
    style: {
      marginInlineStart: 'auto',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, (() => {
    const Group = ({
      title,
      items,
      state,
      setState,
      opts
    }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 12
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, (opts || items).map(s => {
      const label = Array.isArray(s) ? s[0] : s;
      return /*#__PURE__*/React.createElement(Checkbox, {
        key: label,
        label: label,
        checked: !!state[label],
        onChange: e => setState({
          ...state,
          [label]: e.target.checked
        })
      });
    })));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Group, {
      title: "Trip style",
      items: allStyles,
      state: styles,
      setState: setStyles
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement(Group, {
      title: "Difficulty",
      items: ['Easy', 'Moderate', 'Challenging'],
      state: difficulty,
      setState: setDifficulty
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement(Group, {
      title: "Trip length",
      opts: durationBuckets,
      state: duration,
      setState: setDuration
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement(Group, {
      title: "Price per person",
      opts: priceBuckets,
      state: price,
      setState: setPrice
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement(Group, {
      title: "Extras",
      items: ['Free cancellation', 'Small group (\u226410)'],
      state: extras,
      setState: setExtras
    }));
  })())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontSize: 15
    }
  }, loading ? 'Finding trips…' : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, shown.length), " trips found")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Sort: Recommended', 'Price: Low to high', 'Price: High to low', 'Rating']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 22
    }
  }, loading ? [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(window.TripCardSkeleton, {
    key: i
  })) : paged.map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    onClick: () => onOpenTrip(t.id)
  }))), !loading && totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(Math.max(1, curPage - 1)),
    disabled: curPage === 1,
    "aria-label": "Previous page",
    style: {
      minWidth: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      color: curPage === 1 ? 'var(--text-muted)' : 'var(--text-strong)',
      cursor: curPage === 1 ? 'not-allowed' : 'pointer',
      opacity: curPage === 1 ? 0.5 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 12px',
      fontWeight: 600,
      fontSize: 14,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 16,
    color: "currentColor"
  }), "Prev"), Array.from({
    length: totalPages
  }).map((_, i) => {
    const n = i + 1;
    const on = n === curPage;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => setPage(n),
      "aria-current": on ? 'page' : undefined,
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-sm)',
        border: on ? '1.5px solid var(--color-primary)' : '1px solid var(--border-default)',
        background: on ? 'var(--color-primary)' : 'var(--surface-card)',
        color: on ? 'var(--text-on-primary)' : 'var(--text-strong)',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: 15,
        fontFamily: 'var(--font-mono)'
      }
    }, n);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(Math.min(totalPages, curPage + 1)),
    disabled: curPage === totalPages,
    "aria-label": "Next page",
    style: {
      minWidth: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      color: curPage === totalPages ? 'var(--text-muted)' : 'var(--text-strong)',
      cursor: curPage === totalPages ? 'not-allowed' : 'pointer',
      opacity: curPage === totalPages ? 0.5 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 12px',
      fontWeight: 600,
      fontSize: 14,
      gap: 4
    }
  }, "Next", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 16,
    color: "currentColor"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 24px',
      textAlign: 'center'
    }
  }, "Why book with Wayfarer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, [['Compass', 'Local guides', 'Led by people who live there.'], ['BadgeCheck', 'Handpicked stays', 'Characterful, locally owned.'], ['Wallet', 'No hidden fees', 'Clear pricing, reserve free.'], ['Headphones', '24/7 support', 'Real humans, on every trip.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '56px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 24px',
      textAlign: 'center'
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setFaq(faq === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '18px 20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'start',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: faq === i ? 'Minus' : 'Plus',
    size: 18,
    color: "var(--color-primary)"
  })), faq === i && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 20px 18px',
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-xl)',
      padding: '48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--stone-50)',
      margin: '0 0 14px'
    }
  }, "Not sure which trip is right?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--stone-200)',
      margin: '0 0 26px'
    }
  }, "Tell us how you like to travel and we'll match you with a journey."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Talk to a trip expert"))));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TripScreen.jsx
try { (() => {
// Trip detail: gallery, tabs (Overview/Itinerary/Reviews), sticky booking card. window.TripScreen.
function TripScreen({
  tripId,
  onBook,
  onNav,
  onOpenTrip
}) {
  const {
    Button,
    Badge,
    Rating,
    Tabs,
    Avatar,
    TripCard
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const t = window.WF_TRIPS.find(x => x.id === tripId) || window.WF_TRIPS[0];
  const reviews = window.WF_REVIEWS;
  const [tab, setTab] = React.useState('Overview');
  const gallery = [t.image, ...(t.gallery || [])].slice(0, 3);
  const facts = [['Clock', t.duration], ['Users', t.group], ['Activity', t.level], ['MapPin', t.region]];
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    setSlide(0);
  }, [tripId]);
  React.useEffect(() => {
    if (!isNarrow || gallery.length < 2) return;
    const id = setInterval(() => setSlide(s => (s + 1) % gallery.length), 3500);
    return () => clearInterval(id);
  }, [isNarrow, gallery.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 28px 0',
      fontSize: 14,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('services'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      padding: 0
    }
  }, "Trips"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 14,
    color: "var(--stone-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, t.location)), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 28px 0'
    }
  }, isNarrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      height: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      transform: `translateX(-${slide * 100}%)`,
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, gallery.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: i === 0 ? t.title : '',
    style: {
      flex: '0 0 100%',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), gallery.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSlide(s => (s - 1 + gallery.length) % gallery.length),
    "aria-label": "Previous photo",
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.9)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 22,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSlide(s => (s + 1) % gallery.length),
    "aria-label": "Next photo",
    style: {
      position: 'absolute',
      insetInlineEnd: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.9)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 22,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 7
    }
  }, gallery.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSlide(i),
    "aria-label": `Photo ${i + 1}`,
    style: {
      width: i === slide ? 22 : 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: i === slide ? '#fff' : 'rgba(255,255,255,0.55)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: gallery.length > 1 ? '2fr 1fr' : '1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 10,
      height: 420,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[0],
    alt: t.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      gridRow: '1 / 3'
    }
  }), gallery[1] && /*#__PURE__*/React.createElement("img", {
    src: gallery[1],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), gallery[2] && /*#__PURE__*/React.createElement("img", {
    src: gallery[2],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px',
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, t.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: t.badgeTone,
    variant: "solid"
  }, t.badge), t.style.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "neutral"
  }, s))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-body)',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 18,
    color: "var(--clay-400)"
  }), t.location), /*#__PURE__*/React.createElement(Rating, {
    value: t.rating,
    reviews: t.reviews
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      padding: '20px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 28
    }
  }, facts.map(([ic, val], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, val)))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Overview', 'Itinerary', 'Reviews'],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 24
    }
  }), tab === 'Overview' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '0 0 20px'
    }
  }, t.summary), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Your local guide handles the logistics, the introductions, and the little-known detours \\u2014 so all you have to do is be present. Group sizes are intentionally small, accommodations are characterful and locally owned, and there's always room in the schedule to wander.")), tab === 'Itinerary' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, t.itinerary.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 14,
      flexShrink: 0,
      fontFamily: 'var(--font-mono)'
    }
  }, i + 1), i < t.itinerary.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--border-default)',
      minHeight: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)',
      marginBottom: 3
    }
  }, "Day ", i + 1, " \xB7 ", h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, p))))), tab === 'Reviews' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: r.photo,
    name: r.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, r.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: r.rating,
    size: "sm",
    showValue: false
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, r.text))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "from"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "$", t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "/ person")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Free cancellation up to 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 20
    }
  }, [['Calendar', 'Next departure', 'Sep 14, 2026'], ['Users', 'Availability', t.group.replace('Max', 'Up to') + ' \u00b7 4 left']].map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 14
    }
  }, v))))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: () => onBook(t.id)
  }, "Reserve your spot"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '12px 0 0'
    }
  }, "No payment due today")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px'
    }
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px 40px'
    }
  }, [['check', 'Local expert guide throughout'], ['check', 'All accommodation (locally owned)'], ['check', 'Listed activities & entrance fees'], ['check', 'Most breakfasts & welcome dinner'], ['x', 'International flights'], ['x', 'Travel insurance (add at checkout)']].map(([k, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: k === 'check' ? 'var(--success-50)' : 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k === 'check' ? 'Check' : 'X',
    size: 15,
    color: k === 'check' ? 'var(--success-500)' : 'var(--text-muted)',
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: k === 'check' ? 'var(--text-body)' : 'var(--text-muted)'
    }
  }, label)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 28px 8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px'
    }
  }, "Your guide"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isNarrow ? 'column' : 'row',
      gap: 22,
      alignItems: isNarrow ? 'flex-start' : 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=70&auto=format&fit=crop",
    alt: "Guide",
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "Mara Okafor"), /*#__PURE__*/React.createElement(Badge, {
    tone: "pine"
  }, "Lead guide \xB7 9 yrs")), /*#__PURE__*/React.createElement(Rating, {
    value: 4.9,
    reviews: 210,
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '10px 0 0',
      maxWidth: 560
    }
  }, "Born and raised in the region, Mara has led small groups here for nearly a decade. She knows the quiet corners, the best family-run kitchens, and exactly when to slow down.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 28px 72px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 22px'
    }
  }, "You might also like"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, window.WF_TRIPS.filter(x => x.id !== t.id).slice(0, 3).map(rt => /*#__PURE__*/React.createElement(TripCard, {
    key: rt.id,
    image: rt.image,
    title: rt.title,
    location: rt.location,
    badge: rt.badge,
    badgeTone: rt.badgeTone,
    rating: rt.rating,
    reviews: rt.reviews,
    duration: rt.duration,
    price: rt.price,
    onClick: () => onOpenTrip && onOpenTrip(rt.id)
  })))));
}
window.TripScreen = TripScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TripScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Wayfarer sample content — fictional tours used across the website UI kit.
window.WF_TRIPS = [{
  id: 'kyoto',
  title: 'Temples & Tea of Kyoto',
  location: 'Kyoto, Japan',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=70&auto=format&fit=crop',
  gallery: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=70&auto=format&fit=crop'],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 312,
  duration: '7 days',
  price: 1840,
  style: ['Culture', 'Food'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Wander lantern-lit alleys, sip matcha with a tea master, and sleep in a centuries-old ryokan on this slow, soulful week in Japan\u2019s old capital.',
  itinerary: [['Arrive in Kyoto', 'Meet your guide over a welcome kaiseki dinner in Gion.'], ['Fushimi Inari at dawn', 'Beat the crowds through a thousand vermilion gates.'], ['Arashiyama & bamboo', 'Bamboo grove, monkey park, and a riverside lunch.'], ['Tea ceremony', 'A private matcha ceremony with a fifth-generation master.'], ['Nara day trip', 'Giant Buddha, friendly deer, and ancient cedar forest.'], ['Free day in Kyoto', 'Explore at your pace \u2014 your guide has tips for every mood.'], ['Farewell', 'Morning market breakfast before transfers.']]
}, {
  id: 'patagonia',
  title: 'Patagonia Wild Trek',
  location: 'Torres del Paine, Chile',
  region: 'Americas',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=70&auto=format&fit=crop',
  gallery: ['https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=70&auto=format&fit=crop'],
  badge: '2 spots left',
  badgeTone: 'clay',
  rating: 4.8,
  reviews: 154,
  duration: '9 days',
  price: 2390,
  style: ['Adventure'],
  group: 'Max 10',
  level: 'Challenging',
  summary: 'Trek the legendary W circuit beneath granite spires, sleeping in cozy refugios and crossing glacial valleys with a seasoned mountain guide.',
  itinerary: [['Arrive Punta Arenas', 'Group dinner and trek briefing.'], ['Into the park', 'Transfer to Torres del Paine; first valley walk.'], ['Base of the Towers', 'The classic ascent to the granite towers.'], ['French Valley', 'Hanging glaciers and panoramic ridgelines.'], ['Grey Glacier', 'Walk the shore of a vast blue glacier.'], ['Rest & kayak', 'Optional paddle among icebergs.'], ['Patagonian estancia', 'Asado lunch with local gauchos.'], ['Reserve day', 'Weather buffer / free exploring.'], ['Departure', 'Transfer back to Punta Arenas.']]
}, {
  id: 'morocco',
  title: 'Atlas Mountains & Marrakech',
  location: 'Marrakech, Morocco',
  region: 'Africa',
  image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Small group',
  badgeTone: 'pine',
  rating: 4.7,
  reviews: 208,
  duration: '8 days',
  price: 1560,
  style: ['Culture', 'Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'From souk to summit \u2014 spice markets and rooftop riads give way to Berber villages and High Atlas trails.',
  itinerary: [['Marrakech medina', 'Souks, gardens, and a rooftop welcome.'], ['Into the Atlas', 'Drive to a mountain village guesthouse.'], ['Berber trails', 'Walk between villages with a local guide.'], ['Summit day', 'Optional ascent for sunrise views.'], ['Desert edge', 'Camel trek and a night under the stars.'], ['Essaouira coast', 'Atlantic breezes and grilled seafood.'], ['Free day', 'Hammam and last-minute haggling.'], ['Farewell', 'Transfer to the airport.']]
}, {
  id: 'iceland',
  title: 'Land of Fire & Ice',
  location: 'Reykjav\u00edk, Iceland',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'New',
  badgeTone: 'pine',
  rating: 4.9,
  reviews: 96,
  duration: '6 days',
  price: 2120,
  style: ['Adventure'],
  group: 'Max 14',
  level: 'Easy',
  summary: 'Chase waterfalls, soak in geothermal lagoons, and hunt the northern lights along Iceland\u2019s south coast.',
  itinerary: [['Reykjav\u00edk', 'City walk and welcome dinner.'], ['Golden Circle', 'Geysers, Gullfoss, and tectonic rifts.'], ['South coast', 'Black sand beaches and glacier tongues.'], ['Glacier lagoon', 'Icebergs and Diamond Beach.'], ['Northern lights', 'Evening aurora chase.'], ['Blue Lagoon', 'Soak before departure.']]
}, {
  id: 'amalfi',
  title: 'Amalfi Coast by Vespa',
  location: 'Amalfi, Italy',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: null,
  badgeTone: 'pine',
  rating: 4.6,
  reviews: 271,
  duration: '5 days',
  price: 1290,
  style: ['Food', 'Culture'],
  group: 'Max 10',
  level: 'Easy',
  summary: 'Lemon groves, cliffside villages, and long lunches by the sea \u2014 the dolce vita at scooter pace.',
  itinerary: [['Sorrento', 'Pick up your Vespa and coastal orientation.'], ['Positano', 'Cliffs, beaches, and a seafood feast.'], ['Ravello gardens', 'Hilltop villas and views.'], ['Cooking day', 'Make pasta with a local nonna.'], ['Capri', 'Boat to the Blue Grotto and farewell.']]
}, {
  id: 'peru',
  title: 'Inca Trail to Machu Picchu',
  location: 'Cusco, Peru',
  region: 'Americas',
  image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 488,
  duration: '8 days',
  price: 1980,
  style: ['Adventure', 'Culture'],
  group: 'Max 12',
  level: 'Challenging',
  summary: 'Acclimatize in Cusco, walk the ancient stone path over high passes, and arrive at the Sun Gate at dawn.',
  itinerary: [['Cusco', 'Acclimatize and explore the old town.'], ['Sacred Valley', 'Markets and Inca terraces.'], ['Trail day 1', 'Into the cloud forest.'], ['Dead Woman\u2019s Pass', 'The high point at 4,215m.'], ['Cloud forest', 'Ruins and orchids.'], ['Sun Gate', 'Dawn arrival at Machu Picchu.'], ['Machu Picchu', 'Full guided tour.'], ['Departure', 'Return to Cusco and fly out.']]
}, {
  id: 'santorini',
  title: 'Cyclades Island Hopper',
  location: 'Santorini, Greece',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.8,
  reviews: 364,
  duration: '7 days',
  price: 1720,
  style: ['Beaches', 'Culture'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Whitewashed villages, caldera sunsets, and slow ferries between Santorini, Naxos, and Paros.',
  itinerary: [['Santorini', 'Caldera walk and a sunset in Oia.'], ['Naxos', 'Ferry over; mountain villages and beaches.'], ['Paros', 'Fishing harbors and sea kayaking.'], ['Island life', 'Cooking class and a winery visit.'], ['Free day', 'Beach time or boat trip.'], ['Delos', 'Ancient ruins by boat.'], ['Farewell', 'Last swim and transfers.']]
}, {
  id: 'safari',
  title: 'Serengeti Migration Safari',
  location: 'Serengeti, Tanzania',
  region: 'Africa',
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: '3 spots left',
  badgeTone: 'clay',
  rating: 4.9,
  reviews: 198,
  duration: '9 days',
  price: 3450,
  style: ['Wildlife', 'Adventure'],
  group: 'Max 8',
  level: 'Easy',
  summary: 'Track the great migration across endless plains, with sunrise game drives and nights under canvas.',
  itinerary: [['Arusha', 'Briefing and overnight lodge.'], ['Tarangire', 'Elephants and baobab country.'], ['Serengeti', 'First game drives on the plains.'], ['Migration', 'Follow the herds and river crossings.'], ['Ngorongoro', 'Crater floor full-day safari.'], ['Maasai village', 'Cultural visit and walking safari.'], ['Big cats', 'Dawn drive for lion and cheetah.'], ['Rest day', 'Camp and optional balloon ride.'], ['Departure', 'Fly out from Kilimanjaro.']]
}, {
  id: 'vietnam',
  title: 'Vietnam: Hanoi to Halong',
  location: 'Hanoi, Vietnam',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'New',
  badgeTone: 'pine',
  rating: 4.7,
  reviews: 142,
  duration: '8 days',
  price: 1490,
  style: ['Culture', 'Food'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Street food in the old quarter, terraced rice fields, and an overnight cruise through Halong Bay.',
  itinerary: [['Hanoi', 'Old quarter food walk.'], ['Ninh Binh', 'Rowboats through limestone karsts.'], ['Sapa', 'Trek between hill-tribe villages.'], ['Homestay', 'Night with a local family.'], ['Halong Bay', 'Overnight cruise and kayaking.'], ['Hoi An', 'Lantern town and tailors.'], ['Cooking', 'Market tour and class.'], ['Departure', 'Fly home from Da Nang.']]
}, {
  id: 'norway',
  title: 'Norwegian Fjords & Northern Lights',
  location: 'Troms\u00f8, Norway',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: null,
  badgeTone: 'pine',
  rating: 4.8,
  reviews: 176,
  duration: '6 days',
  price: 2580,
  style: ['Adventure', 'Wildlife'],
  group: 'Max 10',
  level: 'Moderate',
  summary: 'Dog-sledding, fjord cruises, and aurora hunts above the Arctic Circle from a base in Troms\u00f8.',
  itinerary: [['Troms\u00f8', 'Arctic city and cable-car views.'], ['Fjord cruise', 'Silent electric boat among the peaks.'], ['Husky day', 'Dog-sledding across the tundra.'], ['Aurora night', 'Chase the northern lights.'], ['S\u00e1mi culture', 'Reindeer and traditional lavvu lunch.'], ['Departure', 'Morning at leisure, then home.']]
}, {
  id: 'newzealand',
  title: 'New Zealand South Island',
  location: 'Queenstown, New Zealand',
  region: 'Oceania',
  image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 221,
  duration: '10 days',
  price: 2890,
  style: ['Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'Glaciers, fjords, and alpine lakes \u2014 a road trip through Middle-earth with hikes at every stop.',
  itinerary: [['Queenstown', 'Adventure capital welcome.'], ['Glenorchy', 'Lord of the Rings country.'], ['Wanaka', 'Lakeside and Roys Peak hike.'], ['Franz Josef', 'Glacier walk.'], ['Arthur\u2019s Pass', 'Alpine crossing.'], ['Aoraki', 'Mt Cook and stargazing.'], ['Te Anau', 'Gateway to the fjords.'], ['Milford Sound', 'Cruise the fjord.'], ['Catlins', 'Waterfalls and wildlife.'], ['Departure', 'Fly out from Dunedin.']]
}, {
  id: 'jordan',
  title: 'Petra & Wadi Rum Desert',
  location: 'Petra, Jordan',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: '2 spots left',
  badgeTone: 'clay',
  rating: 4.8,
  reviews: 167,
  duration: '7 days',
  price: 1840,
  style: ['Culture', 'Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'Walk into the rose-red city of Petra, sleep in a desert camp, and float in the Dead Sea.',
  itinerary: [['Amman', 'Citadel and street food.'], ['Jerash', 'Roman ruins.'], ['Petra', 'The Treasury at dawn.'], ['Petra hikes', 'Monastery trail and high places.'], ['Wadi Rum', 'Jeep safari and desert camp.'], ['Dead Sea', 'Float and mud spa.'], ['Departure', 'Transfer to Amman.']]
}];
window.WF_REVIEWS = [{
  name: 'Mara Okafor',
  photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'May 2026',
  text: 'Our guide turned a great itinerary into the trip of a lifetime. Every detail was handled \u2014 we just had to show up and be amazed.'
}, {
  name: 'Liam Chen',
  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'Apr 2026',
  text: 'Small group meant we actually got to know each other. Pacing was perfect \u2014 challenging but never rushed.'
}, {
  name: 'Sofia Reyes',
  photo: null,
  rating: 4,
  date: 'Mar 2026',
  text: 'Beautiful trip and wonderful food. One travel day was long, but the views more than made up for it.'
}, {
  name: 'Tom Becker',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'Feb 2026',
  text: 'Every detail was handled so I could just be present. The small group felt like travelling with friends by day two.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Shared Lucide icon helper for the website UI kit. Exposes window.Icon.
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && lucide[name]) {
      const el = lucide.createElement(lucide[name]);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke', color);
      el.setAttribute('stroke-width', strokeWidth);
      ref.current.innerHTML = el.outerHTML;
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/util.jsx
try { (() => {
// Loading-state utilities for the UI kit. Exposes window.Skeleton, window.TripCardSkeleton, window.useFakeLoad.
(function () {
  function useFakeLoad(ms) {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      const t = setTimeout(() => setLoading(false), ms || 850);
      return () => clearTimeout(t);
    }, []);
    return loading;
  }
  function Skeleton({
    w = '100%',
    h = 16,
    r = 'var(--radius-sm)',
    style = {}
  }) {
    return React.createElement('span', {
      'aria-hidden': true,
      style: {
        display: 'block',
        width: w,
        height: h,
        borderRadius: r,
        background: 'linear-gradient(90deg, var(--surface-sunk) 25%, var(--border-subtle) 37%, var(--surface-sunk) 63%)',
        backgroundSize: '400% 100%',
        animation: 'wf-shimmer 1.4s ease infinite',
        ...style
      }
    });
  }
  function TripCardSkeleton() {
    return React.createElement('div', {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      }
    }, React.createElement(Skeleton, {
      h: 0,
      style: {
        aspectRatio: '4 / 3',
        height: 'auto',
        borderRadius: 0
      }
    }), React.createElement('div', {
      style: {
        padding: '16px 18px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, React.createElement(Skeleton, {
      w: '40%',
      h: 12
    }), React.createElement(Skeleton, {
      w: '80%',
      h: 20
    }), React.createElement(Skeleton, {
      w: '55%',
      h: 14
    }), React.createElement(Skeleton, {
      w: '35%',
      h: 22,
      style: {
        marginTop: 4
      }
    })));
  }
  // inject keyframes once
  if (!document.getElementById('wf-shimmer-kf')) {
    const s = document.createElement('style');
    s.id = 'wf-shimmer-kf';
    s.textContent = '@keyframes wf-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}';
    document.head.appendChild(s);
  }
  window.Skeleton = Skeleton;
  window.TripCardSkeleton = TripCardSkeleton;
  window.useFakeLoad = useFakeLoad;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/util.jsx", error: String((e && e.message) || e) }); }

// wayfarer-template/assets/js/dashboard.js
try { (() => {
// Wayfarer — dashboard screens (Traveler + Admin)

// Traveler (client) dashboard — manage bookings, itineraries, documents, updates.
// window.ClientDashboardScreen.

// Isolated countdown — only THIS component re-renders each second, so the rest
// of the dashboard (and its images) never blink.
function Countdown({
  target
}) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const cd = [[Math.floor(diff / 86400000), 'days'], [Math.floor(diff / 3600000) % 24, 'hrs'], [Math.floor(diff / 60000) % 60, 'min'], [Math.floor(diff / 1000) % 60, 'sec']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, cd.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minWidth: 62,
      textAlign: 'center',
      background: 'rgba(255,255,255,0.14)',
      backdropFilter: 'blur(6px)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: '#fff'
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--stone-200)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, l))));
}
function ClientDashboardScreen({
  onNav,
  onOpenTrip,
  theme,
  onToggleTheme
}) {
  const {
    Badge,
    Avatar,
    Button,
    Rating,
    TripCard
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const next = trips.find(t => t.id === 'kyoto') || trips[0];
  const [section, setSection] = React.useState('Overview');
  const [openDay, setOpenDay] = React.useState(0);
  const [docs, setDocs] = React.useState([{
    name: 'Passport.pdf',
    type: 'Passport',
    status: 'Verified',
    tone: 'success'
  }, {
    name: 'Travel-insurance.pdf',
    type: 'Insurance',
    status: 'In review',
    tone: 'warning'
  }, {
    name: null,
    type: 'Japan visa',
    status: 'Action needed',
    tone: 'error'
  }, {
    name: 'Emergency-contact',
    type: 'Emergency contact',
    status: 'Complete',
    tone: 'success'
  }]);
  const fileRef = React.useRef(null);
  const [pendingType, setPendingType] = React.useState(null);
  const nav = [['Overview', 'LayoutDashboard'], ['My trips', 'Luggage'], ['Itinerary', 'Map'], ['Documents', 'FileText'], ['Updates', 'Bell'], ['Profile', 'User']];
  const bookings = [{
    trip: next,
    date: 'Sep 14, 2026',
    status: 'Confirmed',
    tone: 'success',
    ref: 'WF-2K9X4',
    when: 'upcoming'
  }, {
    trip: trips.find(t => t.id === 'iceland') || trips[3],
    date: 'Oct 21, 2026',
    status: 'Payment due',
    tone: 'warning',
    ref: 'WF-7H3L2',
    when: 'upcoming'
  }, {
    trip: trips.find(t => t.id === 'amalfi') || trips[4],
    date: 'May 3, 2025',
    status: 'Completed',
    tone: 'neutral',
    ref: 'WF-1A0P8',
    when: 'past'
  }];
  const updates = [['UserCheck', 'pine', 'Your guide is confirmed', 'Mara Okafor will lead your Kyoto trip. She has 9 years of experience in the region.', '2 days ago'], ['Plane', 'marigold', 'Flight details received', 'We\u2019ve logged your arrival into Kansai (KIX) on Sep 13. Airport transfer is arranged.', '5 days ago'], ['ListChecks', 'pine', 'Pre-trip checklist ready', 'Your packing list and what-to-know guide for Kyoto are now available.', '1 week ago'], ['CloudSun', 'clay', 'Weather note for Kyoto', 'Expect mild 18\u201324\u00b0C days in September. Pack light layers and a rain shell.', '1 week ago'], ['Users', 'pine', 'Meet your travel group', 'You\u2019ll be travelling with 9 others from 4 countries. Say hello in the group chat.', '2 weeks ago'], ['CreditCard', 'marigold', 'Balance reminder', 'Your remaining balance is due 30 days before departure. No action needed yet.', '2 weeks ago'], ['BookOpen', 'pine', 'Kyoto reading list added', 'A short guide to temple etiquette, tea culture, and local phrases is in your docs.', '3 weeks ago']];

  // countdown to departure (demo: 56 days out) — isolated below so the page doesn't re-render each tick
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 56, []);
  function pickFile(type) {
    setPendingType(type);
    fileRef.current && fileRef.current.click();
  }
  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f && pendingType) setDocs(d => d.map(x => x.type === pendingType ? {
      ...x,
      name: f.name,
      status: 'In review',
      tone: 'warning'
    } : x));
    setPendingType(null);
    e.target.value = '';
  }
  const docComplete = docs.filter(d => d.tone === 'success').length;

  // --- reusable bits ---
  const Panel = ({
    title,
    action,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, children));
  const NextTripHero = () => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: 240,
      display: 'flex',
      alignItems: 'flex-end',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image,
    alt: next.title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,53,42,0.92) 0%, rgba(6,53,42,0.35) 60%, rgba(6,53,42,0.1) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '28px 30px',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "marigold",
    variant: "solid"
  }, "Next departure"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: '#fff',
      margin: '12px 0 4px'
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--stone-100)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 16,
    color: "var(--marigold-300)"
  }), next.location), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Calendar",
    size: 16,
    color: "var(--marigold-300)"
  }), "Sep 14, 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    target: target
  }))));
  const BookingCard = ({
    b
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: b.trip.image,
    alt: "",
    style: {
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-md)',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone
  }, b.status), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, b.ref)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, b.trip.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 12,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", null, b.trip.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.trip.duration))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: b.when === 'past' ? 'secondary' : 'primary',
    onClick: () => onOpenTrip(b.trip.id)
  }, b.when === 'past' ? 'Rebook' : 'View trip'), b.status === 'Payment due' && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    onClick: () => onNav('book')
  }, "Pay now")));
  const DocRow = ({
    d
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: d.name ? 'var(--color-primary-soft)' : 'var(--surface-sunk)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.name ? 'FileCheck' : 'FilePlus',
    size: 20,
    color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, d.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, d.name || 'Not uploaded yet')), /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: d.name ? 'ghost' : 'secondary',
    onClick: () => pickFile(d.type),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: d.name ? 'RefreshCw' : 'Upload',
      size: 15,
      color: "var(--color-primary)"
    })
  }, d.name ? 'Replace' : 'Upload'));
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setNavOpen(false);
  }, [section]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    onChange: onFile,
    style: {
      display: 'none'
    }
  }), isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setNavOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 79
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: isNarrow ? {
      position: 'fixed',
      top: 0,
      insetInlineStart: 0,
      width: 280,
      height: '100vh',
      zIndex: 80,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16,
      transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
    } : {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '6px 8px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([label, ic]) => {
    const on = section === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setSection(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        minHeight: 44,
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 14.5,
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }), label, label === 'Updates' && /*#__PURE__*/React.createElement("span", {
      style: {
        marginInlineStart: 'auto',
        fontSize: 11,
        fontWeight: 700,
        color: '#fff',
        background: 'var(--clay-400)',
        borderRadius: 'var(--radius-pill)',
        minWidth: 18,
        height: 18,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5px'
      }
    }, updates.length));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'auto',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 12px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--text-body)',
      fontSize: 14.5,
      width: '100%',
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 19,
    color: "var(--text-muted)"
  }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: () => setNavOpen(true),
    "aria-label": "Menu",
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section === 'Overview' ? 'Welcome back, Jordan' : section), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '2px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section === 'Overview' ? 'Your next adventure is just around the corner.' : 'Manage your ' + section.toLowerCase() + ' for upcoming trips.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    onClick: () => setSection('Updates'),
    style: {
      position: 'relative',
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 19
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      insetInlineEnd: 9,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--clay-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingInlineStart: 6,
      borderInlineStart: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jordan Rivera",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&q=70&auto=format&fit=crop",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, "Jordan Rivera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Gold traveler"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      minWidth: 0,
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NextTripHero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['Luggage', '2', 'Upcoming trips', 'pine'], ['FileText', docComplete + '/4', 'Documents ready', 'marigold'], ['Award', '14', 'Countries visited', 'success']].map(([ic, v, l, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Latest updates",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Updates'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 13.5,
        cursor: 'pointer'
      }
    }, "See all")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, updates.slice(0, 3).map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: `var(--${u[1]}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u[0],
    size: 18,
    color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, u[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, u[4])))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Documents",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Documents'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 13.5,
        cursor: 'pointer'
      }
    }, "Manage")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, docs.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.name ? 'FileCheck' : 'FilePlus',
    size: 17,
    color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, d.type), /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Get ready for Kyoto",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "3 of 6 done")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Booking confirmed', true], ['Passport uploaded', true], ['Travel insurance added', true], ['Visa documents', false], ['Pre-trip questionnaire', false], ['Join the group chat', false]].map(([label, done], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: done ? 'var(--success-50)' : 'var(--surface-sunk)',
      border: done ? 'none' : '1.5px solid var(--border-default)'
    }
  }, done && /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 14,
    color: "var(--success-500)",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14.5,
      color: done ? 'var(--text-muted)' : 'var(--text-strong)',
      textDecoration: done ? 'line-through' : 'none'
    }
  }, label), !done && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => {}
  }, "Do it"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Recommended for you"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('services'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-link)',
      fontWeight: 600,
      fontSize: 13.5,
      cursor: 'pointer'
    }
  }, "Browse all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, trips.filter(t => t.id !== next.id).slice(0, 3).map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    onClick: () => onOpenTrip(t.id)
  }))))), section === 'My trips' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['Plane', '14', 'Trips taken'], ['Globe2', '11', 'Countries'], ['Moon', '92', 'Nights away'], ['Footprints', '1,240', 'Miles trekked']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Upcoming"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bookings.filter(b => b.when === 'upcoming').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
    key: i,
    b: b
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Past trips"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bookings.filter(b => b.when === 'past').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
    key: i,
    b: b
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Saved for later"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, trips.filter(t => ['santorini', 'safari', 'norway'].includes(t.id)).map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    reviews: t.reviews,
    duration: t.duration,
    price: t.price,
    saved: true,
    onClick: () => onOpenTrip(t.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      minHeight: 200,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=72&auto=format&fit=crop",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(6,53,42,0.88), rgba(6,53,42,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '32px 36px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "Ready for your next adventure?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--stone-100)',
      margin: '0 0 20px',
      maxWidth: 440
    }
  }, "You've visited 11 countries with us. There are 30+ more waiting."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('services')
  }, "Browse new trips")))), section === 'Itinerary' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      height: 180,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: '#fff'
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-100)'
    }
  }, next.location, " \xB7 ", next.duration, " \xB7 ", next.group)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse",
    onClick: () => onOpenTrip(next.id)
  }, "View trip page"))), /*#__PURE__*/React.createElement(Panel, {
    title: `${next.title} · day by day`,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Download",
        size: 15,
        color: "var(--color-primary)"
      })
    }, "Download PDF")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, next.itinerary.map(([h, p], i) => {
    const on = openDay === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenDay(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: on ? 'var(--color-primary)' : 'var(--surface-sunk)',
        color: on ? 'var(--text-on-primary)' : 'var(--text-body)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        flexShrink: 0
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: 700,
        fontSize: 15.5,
        color: 'var(--text-strong)'
      }
    }, "Day ", i + 1, " \xB7 ", h), /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'ChevronUp' : 'ChevronDown',
      size: 18,
      color: "var(--text-muted)"
    })), on && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 16px 48px',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, p));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "What's included"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Local expert guide throughout', 'All accommodation', 'Listed activities & fees', 'Most breakfasts & welcome dinner', 'Airport transfers'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 16,
    color: "var(--success-500)",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Panel, {
    title: "What to pack"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['Light layers', 'Rain shell', 'Walking shoes', 'Power adapter', 'Reusable bottle', 'Sun hat', 'Day pack', 'Camera'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Good to know"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Languages', 'Local language & currency', 'Japanese · Japanese yen (¥). English is limited outside cities.'], ['Plug', 'Power & connectivity', 'Type A/B sockets, 100V. Pocket Wi-Fi is provided for the group.'], ['HeartPulse', 'Health & safety', 'No vaccinations required. Your guide carries a first-aid kit throughout.'], ['Wallet', 'Spending money', 'Budget ~$40/day for lunches and extras. Cards widely accepted in Kyoto.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, p))))))), section === 'Documents' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => pickFile('Passport'),
    style: {
      border: '2px dashed var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 24px',
      textAlign: 'center',
      cursor: 'pointer',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--color-primary-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "UploadCloud",
    size: 26,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, "Drop files here or click to upload"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "PDF, JPG or PNG \xB7 up to 10MB each. Encrypted & private.")), /*#__PURE__*/React.createElement(Panel, {
    title: "Your travel documents"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, docComplete, " of ", docs.length, " complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${docComplete / docs.length * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  }))), docs.map((d, i) => /*#__PURE__*/React.createElement(DocRow, {
    key: i,
    d: d
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Required for your trips"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Temples & Tea of Kyoto', 'Passport · Japan visa', 'clay'], ['Land of Fire & Ice', 'Passport only', 'success']].map(([trip, req, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--surface-sunk)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Luggage",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, req)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, tone === 'clay' ? 'Action needed' : 'Ready'))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Recent activity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Upload', 'Passport.pdf uploaded', '2 days ago'], ['ShieldCheck', 'Insurance received', '2 days ago'], ['Clock', 'Visa reminder sent', '4 days ago']].map(([ic, l, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Need help with documents?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Which documents do I need?', 'Requirements vary by destination — check each trip’s page, or your “Required for your trips” list above.'], ['Are my files secure?', 'Yes. All uploads are encrypted at rest and only visible to you and your trip coordinator.'], ['When are documents due?', 'Most are needed 30 days before departure; visa documents may be required earlier.']].map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a)))))), section === 'Updates' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "Trip updates & notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, updates.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: `var(--${u[1]}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: u[0],
    size: 20,
    color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15.5,
      color: 'var(--text-strong)'
    }
  }, u[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, u[4])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '4px 0 0'
    }
  }, u[3])))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Notification preferences"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Trip reminders & countdowns', true], ['Guide & itinerary changes', true], ['Document & visa alerts', true], ['Weather updates', false], ['Deals & new trips', false]].map(([label, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--border-default)',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff'
    }
  }))))))), section === 'Profile' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Personal details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Full name', 'Jordan Rivera'], ['Email', 'jordan@email.com'], ['Phone', '+1 (555) 014 2277'], ['Nationality', 'United States'], ['Date of birth', 'Mar 12, 1991']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 4 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travel preferences"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 18
    }
  }, ['Adventure', 'Culture', 'Food', 'Window seat', 'Vegetarian'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "pine"
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Settings",
      size: 15,
      color: "var(--color-primary)"
    })
  }, "Edit preferences"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-inverse)',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--marigold-300)'
    }
  }, "Wayfarer rewards"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--stone-50)',
      margin: '6px 0 2px'
    }
  }, "Gold traveler"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--stone-200)'
    }
  }, "2,480 points \xB7 520 to Platinum")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 5,
      background: 'rgba(255,255,255,0.18)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '82%',
      height: '100%',
      background: 'var(--marigold-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--stone-200)',
      marginTop: 8,
      textAlign: 'end'
    }
  }, "82% to next tier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Emergency contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Name', 'Alex Rivera'], ['Relationship', 'Sibling'], ['Phone', '+1 (555) 660 1180']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 2 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Security"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Lock', 'Password', 'Updated 3 months ago'], ['Smartphone', 'Two-factor auth', 'Enabled'], ['Mail', 'Login alerts', 'On']].map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, v)))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travel history"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Amalfi Coast by Vespa', 'Italy', 'May 2025', '★ 5.0'], ['Cyclades Island Hopper', 'Greece', 'Sep 2024', '★ 4.8'], ['Atlas Mountains & Marrakech', 'Morocco', 'Apr 2024', '★ 4.9'], ['Vietnam: Hanoi to Halong', 'Vietnam', 'Nov 2023', '★ 4.7']].map(([trip, country, date, rating], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 18,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, country, " \xB7 ", date)), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 13,
      color: 'var(--marigold-600)',
      fontWeight: 600
    }
  }, rating))))))))));
}
window.ClientDashboardScreen = ClientDashboardScreen;

// Booking-management dashboard: sidebar, stats, bookings table, messages. window.DashboardScreen.
function DashboardScreen({
  onNav,
  theme,
  onToggleTheme
}) {
  const {
    Badge,
    Avatar,
    Button,
    Tag
  } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [section, setSection] = React.useState('Overview');
  const [bookFilter, setBookFilter] = React.useState('All');
  const nav = [['Overview', 'LayoutDashboard'], ['Bookings', 'CalendarCheck'], ['Reports', 'BarChart3'], ['Travelers', 'Users'], ['Settings', 'Settings']];
  const stats = [['Upcoming trips', '6', 'CalendarCheck', 'pine'], ['New bookings', '24', 'TrendingUp', 'marigold'], ['Revenue (mo)', '$48.2k', 'Wallet', 'success'], ['Occupancy', '82%', 'Gauge', 'clay']];
  const bookings = [['WF-2K9X4', 'Jordan Rivera', 'Temples & Tea of Kyoto', 'Sep 14', 2, 'Confirmed', 'success'], ['WF-3L1Z8', 'Amira Haddad', 'Land of Fire & Ice', 'Sep 21', 4, 'Pending', 'warning'], ['WF-3M7Q2', 'Sam Okonkwo', 'Patagonia Wild Trek', 'Oct 5', 2, 'Confirmed', 'success'], ['WF-4P2R9', 'Lena Vogel', 'Atlas Mountains', 'Oct 12', 3, 'Cancelled', 'error'], ['WF-4T8W1', 'Diego Marín', 'Inca Trail', 'Nov 2', 2, 'Confirmed', 'success'], ['WF-5A2C6', 'Priya Nair', 'Serengeti Migration Safari', 'Nov 9', 2, 'Confirmed', 'success'], ['WF-5K8D3', 'Tom Becker', 'Cyclades Island Hopper', 'Nov 16', 5, 'Pending', 'warning'], ['WF-6B1F9', 'Yuki Tanaka', 'New Zealand South Island', 'Dec 1', 2, 'Confirmed', 'success']];
  const messages = [['Amira Haddad', 'Question about visa for Iceland trip', 'Hi! Do I need a visa as a UK citizen for the Iceland departure? Also, is the airport transfer included on arrival day?', '2h', true], ['Sam Okonkwo', 'Can I add a day in Santiago?', 'We\u2019d love to arrive a day early before the Patagonia trek. Can you help arrange the extra night and transfer?', '5h', true], ['Priya Nair', 'Dietary requirements', 'Just confirming you received my note about a nut allergy for the Serengeti trip. Thank you!', '1d', true], ['Lena Vogel', 'Thanks for the refund — all sorted!', 'Appreciate how quickly you handled the cancellation. We\u2019ll definitely book again next year.', '1d', false], ['Diego Marín', 'Packing list question', 'For the Inca Trail in November, would you recommend a 3-season or 4-season sleeping bag?', '2d', false]];
  const travelers = [['Jordan Rivera', 'jordan@email.com', 'United States', 14, 'Gold', 'success'], ['Amira Haddad', 'amira.h@email.com', 'United Kingdom', 6, 'Silver', 'neutral'], ['Sam Okonkwo', 'sam.ok@email.com', 'Nigeria', 9, 'Gold', 'success'], ['Priya Nair', 'priya.n@email.com', 'India', 4, 'Silver', 'neutral'], ['Diego Marín', 'diego.m@email.com', 'Spain', 11, 'Gold', 'success'], ['Yuki Tanaka', 'yuki.t@email.com', 'Japan', 3, 'Bronze', 'warning']];
  const shownBookings = bookFilter === 'All' ? bookings : bookings.filter(b => b[5] === bookFilter);
  const Panel = ({
    title,
    action,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, children));
  const BookingsTable = ({
    rows
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'start',
      color: 'var(--text-muted)'
    }
  }, ['Ref', 'Traveler', 'Trip', 'Departs', 'Pax', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'start',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      padding: '12px 4px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((b, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      padding: '14px 4px',
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, b[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, b[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, b[4]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: b[6]
  }, b[5])))))));
  const RevenueChart = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Revenue \xB7 last 8 months",
    action: /*#__PURE__*/React.createElement("span", {
      className: "u-mono",
      style: {
        fontSize: 13,
        color: 'var(--success-500)',
        fontWeight: 600
      }
    }, "\u25B2 18%")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: 160
    }
  }, [['Feb', 38], ['Mar', 44], ['Apr', 41], ['May', 52], ['Jun', 60], ['Jul', 72], ['Aug', 66], ['Sep', 84]].map(([m, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v * 1.6}px`,
      borderRadius: '6px 6px 0 0',
      background: i === 7 ? 'var(--color-accent)' : 'var(--color-primary)',
      opacity: i === 7 ? 1 : 0.55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, m)))));
  const TasksPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Tasks"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Confirm guide for Inca Trail', 'Due today', 'clay'], ['Refund Lena Vogel', 'Due tomorrow', 'warning'], ['Approve 3 new reviews', 'This week', 'pine'], ['Update Iceland itinerary', 'This week', 'pine']].map(([t, due, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, due)))));
  const DeparturesPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Upcoming departures"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Temples & Tea of Kyoto', 'Sep 14', 8, 12], ['Land of Fire & Ice', 'Sep 21', 11, 14], ['Patagonia Wild Trek', 'Oct 5', 6, 10]].map(([trip, date, filled, cap], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, String(date).split(' ')[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--color-primary)',
      textTransform: 'uppercase'
    }
  }, String(date).split(' ')[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--surface-sunk)',
      marginTop: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${filled / cap * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, filled, "/", cap)))));
  const TopTripsPanel = () => /*#__PURE__*/React.createElement(Panel, {
    title: "Top-selling trips this month"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Temples & Tea of Kyoto', 'Japan', 42, '$77.3k'], ['Inca Trail to Machu Picchu', 'Peru', 38, '$75.2k'], ['Patagonia Wild Trek', 'Chile', 29, '$69.3k'], ['Serengeti Migration Safari', 'Tanzania', 18, '$62.1k']].map(([trip, country, sales, rev], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-muted)',
      width: 22
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, trip), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, country, " \xB7 ", sales, " bookings")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${sales / 42 * 100}%`,
      height: '100%',
      background: 'var(--color-primary)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 64,
      textAlign: 'end'
    }
  }, rev)))));
  const StatsRow = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, stats.map(([l, v, ic, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 13,
      color: `var(--${tone === 'pine' ? 'pine-700' : tone === 'marigold' ? 'marigold-600' : tone === 'success' ? 'success-500' : 'clay-500'})`
    })
  }, " ")), /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))));
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setNavOpen(false);
  }, [section]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
      overflow: 'hidden'
    }
  }, isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setNavOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 79
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: isNarrow ? {
      position: 'fixed',
      top: 0,
      insetInlineStart: 0,
      width: 280,
      height: '100vh',
      zIndex: 80,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16,
      transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
    } : {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderInlineEnd: '1px solid var(--border-subtle)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '6px 8px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WF_LOGO,
    width: "34",
    height: "34",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Wayfarer")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10px 10px',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Manage"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([label, ic]) => {
    const on = section === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setSection(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        minHeight: 44,
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--text-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 15,
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: on ? 'var(--color-primary)' : 'var(--text-muted)'
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'auto',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 12px',
      minHeight: 44,
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--text-body)',
      fontSize: 15,
      width: '100%',
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 19,
    color: "var(--text-muted)"
  }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, isNarrow && /*#__PURE__*/React.createElement("button", {
    onClick: () => setNavOpen(true),
    "aria-label": "Menu",
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, section), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '2px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Welcome back, Mara \u2014 here's what's happening."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'Sun' : 'Moon',
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16,
      color: "#fff"
    })
  }, "New booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingInlineStart: 8,
      borderInlineStart: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mara Okafor",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, "Mara Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Admin"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement(Panel, {
    title: "Recent bookings",
    action: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSection('Bookings'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, "View all")
  }, /*#__PURE__*/React.createElement(BookingsTable, {
    rows: bookings.slice(0, 5)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DeparturesPanel, null), /*#__PURE__*/React.createElement(Panel, {
    title: "Bookings by region"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13.5,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, region), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement(TasksPanel, null)), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Bookings' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['All', 'Confirmed', 'Pending', 'Cancelled'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: bookFilter === f,
    onClick: () => setBookFilter(f)
  }, f)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 15,
      color: "#fff"
    })
  }, "New booking"))), /*#__PURE__*/React.createElement(Panel, {
    title: `All bookings · ${shownBookings.length}`
  }, /*#__PURE__*/React.createElement(BookingsTable, {
    rows: shownBookings
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['Confirmed', '5', 'success', 'CircleCheck'], ['Pending', '2', 'warning', 'Clock'], ['Cancelled', '1', 'error', 'CircleX']].map(([l, v, tone, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: `var(--${tone}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: `var(--${tone}-500)`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l)))))), section === 'Reports' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['DollarSign', '$412k', 'Revenue YTD'], ['TrendingUp', '+18%', 'vs last year'], ['Receipt', '$1,920', 'Avg. booking'], ['Star', '4.9', 'Avg. rating']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Bookings by region"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13.5,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, region), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunk)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
    }
  })))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Booking channels"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Website', '$248k', 60], ['Referral', '$103k', 25], ['Partners', '$41k', 10], ['Repeat guests', '$20k', 5]].map(([ch, rev, pct], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, ch), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "u-mono",
    "data-ltr": true,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      width: 56,
      textAlign: 'end'
    }
  }, rev)))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Travelers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['Users', '1,284', 'Total travelers'], ['UserPlus', '38', 'New this month'], ['Award', '312', 'Gold members'], ['Repeat', '46%', 'Repeat rate']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "u-mono",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Travelers",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--text-link)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
      }
    }, "Export CSV")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Name', 'Email', 'Country', 'Trips', 'Tier'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'start',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '12px 4px'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, travelers.map((t, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t[0],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t[0]))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[2]), /*#__PURE__*/React.createElement("td", {
    className: "u-mono",
    style: {
      padding: '14px 4px',
      color: 'var(--text-body)'
    }
  }, t[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 4px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t[5]
  }, t[4])))))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Settings' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Company profile"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Company', 'Wayfarer Travel Co.'], ['Support email', 'hello@wayfarer.travel'], ['Phone', '+351 21 000 0000'], ['Base currency', 'USD ($)'], ['Timezone', 'WET · Lisbon']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
      paddingBottom: i < 4 ? 12 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Booking settings"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Free cancellation window', '30 days'], ['Auto-confirm bookings', 'On'], ['Deposit required', 'No'], ['Max group size', '14 travelers'], ['Booking fee', '4%']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Team"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Mara Okafor', 'Owner'], ['Liam Chen', 'Trip manager'], ['Sofia Reyes', 'Support'], ['Diego Marín', 'Partnerships']].map(([n, role], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, role))))), /*#__PURE__*/React.createElement(Panel, {
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['New booking alerts', true], ['Cancellation alerts', true], ['Daily summary email', true], ['Low availability warnings', false], ['Marketing reports', false]].map(([l, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--border-default)',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff'
    }
  })))))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "wayfarer-template/assets/js/dashboard.js", error: String((e && e.message) || e) }); }

// wayfarer-template/assets/js/data.js
try { (() => {
// Wayfarer sample content — fictional tours used across the website UI kit.
window.WF_TRIPS = [{
  id: 'kyoto',
  title: 'Temples & Tea of Kyoto',
  location: 'Kyoto, Japan',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=70&auto=format&fit=crop',
  gallery: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=70&auto=format&fit=crop'],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 312,
  duration: '7 days',
  price: 1840,
  style: ['Culture', 'Food'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Wander lantern-lit alleys, sip matcha with a tea master, and sleep in a centuries-old ryokan on this slow, soulful week in Japan\u2019s old capital.',
  itinerary: [['Arrive in Kyoto', 'Meet your guide over a welcome kaiseki dinner in Gion.'], ['Fushimi Inari at dawn', 'Beat the crowds through a thousand vermilion gates.'], ['Arashiyama & bamboo', 'Bamboo grove, monkey park, and a riverside lunch.'], ['Tea ceremony', 'A private matcha ceremony with a fifth-generation master.'], ['Nara day trip', 'Giant Buddha, friendly deer, and ancient cedar forest.'], ['Free day in Kyoto', 'Explore at your pace \u2014 your guide has tips for every mood.'], ['Farewell', 'Morning market breakfast before transfers.']]
}, {
  id: 'patagonia',
  title: 'Patagonia Wild Trek',
  location: 'Torres del Paine, Chile',
  region: 'Americas',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=70&auto=format&fit=crop',
  gallery: ['https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=70&auto=format&fit=crop'],
  badge: '2 spots left',
  badgeTone: 'clay',
  rating: 4.8,
  reviews: 154,
  duration: '9 days',
  price: 2390,
  style: ['Adventure'],
  group: 'Max 10',
  level: 'Challenging',
  summary: 'Trek the legendary W circuit beneath granite spires, sleeping in cozy refugios and crossing glacial valleys with a seasoned mountain guide.',
  itinerary: [['Arrive Punta Arenas', 'Group dinner and trek briefing.'], ['Into the park', 'Transfer to Torres del Paine; first valley walk.'], ['Base of the Towers', 'The classic ascent to the granite towers.'], ['French Valley', 'Hanging glaciers and panoramic ridgelines.'], ['Grey Glacier', 'Walk the shore of a vast blue glacier.'], ['Rest & kayak', 'Optional paddle among icebergs.'], ['Patagonian estancia', 'Asado lunch with local gauchos.'], ['Reserve day', 'Weather buffer / free exploring.'], ['Departure', 'Transfer back to Punta Arenas.']]
}, {
  id: 'morocco',
  title: 'Atlas Mountains & Marrakech',
  location: 'Marrakech, Morocco',
  region: 'Africa',
  image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Small group',
  badgeTone: 'pine',
  rating: 4.7,
  reviews: 208,
  duration: '8 days',
  price: 1560,
  style: ['Culture', 'Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'From souk to summit \u2014 spice markets and rooftop riads give way to Berber villages and High Atlas trails.',
  itinerary: [['Marrakech medina', 'Souks, gardens, and a rooftop welcome.'], ['Into the Atlas', 'Drive to a mountain village guesthouse.'], ['Berber trails', 'Walk between villages with a local guide.'], ['Summit day', 'Optional ascent for sunrise views.'], ['Desert edge', 'Camel trek and a night under the stars.'], ['Essaouira coast', 'Atlantic breezes and grilled seafood.'], ['Free day', 'Hammam and last-minute haggling.'], ['Farewell', 'Transfer to the airport.']]
}, {
  id: 'iceland',
  title: 'Land of Fire & Ice',
  location: 'Reykjav\u00edk, Iceland',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'New',
  badgeTone: 'pine',
  rating: 4.9,
  reviews: 96,
  duration: '6 days',
  price: 2120,
  style: ['Adventure'],
  group: 'Max 14',
  level: 'Easy',
  summary: 'Chase waterfalls, soak in geothermal lagoons, and hunt the northern lights along Iceland\u2019s south coast.',
  itinerary: [['Reykjav\u00edk', 'City walk and welcome dinner.'], ['Golden Circle', 'Geysers, Gullfoss, and tectonic rifts.'], ['South coast', 'Black sand beaches and glacier tongues.'], ['Glacier lagoon', 'Icebergs and Diamond Beach.'], ['Northern lights', 'Evening aurora chase.'], ['Blue Lagoon', 'Soak before departure.']]
}, {
  id: 'amalfi',
  title: 'Amalfi Coast by Vespa',
  location: 'Amalfi, Italy',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: null,
  badgeTone: 'pine',
  rating: 4.6,
  reviews: 271,
  duration: '5 days',
  price: 1290,
  style: ['Food', 'Culture'],
  group: 'Max 10',
  level: 'Easy',
  summary: 'Lemon groves, cliffside villages, and long lunches by the sea \u2014 the dolce vita at scooter pace.',
  itinerary: [['Sorrento', 'Pick up your Vespa and coastal orientation.'], ['Positano', 'Cliffs, beaches, and a seafood feast.'], ['Ravello gardens', 'Hilltop villas and views.'], ['Cooking day', 'Make pasta with a local nonna.'], ['Capri', 'Boat to the Blue Grotto and farewell.']]
}, {
  id: 'peru',
  title: 'Inca Trail to Machu Picchu',
  location: 'Cusco, Peru',
  region: 'Americas',
  image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 488,
  duration: '8 days',
  price: 1980,
  style: ['Adventure', 'Culture'],
  group: 'Max 12',
  level: 'Challenging',
  summary: 'Acclimatize in Cusco, walk the ancient stone path over high passes, and arrive at the Sun Gate at dawn.',
  itinerary: [['Cusco', 'Acclimatize and explore the old town.'], ['Sacred Valley', 'Markets and Inca terraces.'], ['Trail day 1', 'Into the cloud forest.'], ['Dead Woman\u2019s Pass', 'The high point at 4,215m.'], ['Cloud forest', 'Ruins and orchids.'], ['Sun Gate', 'Dawn arrival at Machu Picchu.'], ['Machu Picchu', 'Full guided tour.'], ['Departure', 'Return to Cusco and fly out.']]
}, {
  id: 'santorini',
  title: 'Cyclades Island Hopper',
  location: 'Santorini, Greece',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.8,
  reviews: 364,
  duration: '7 days',
  price: 1720,
  style: ['Beaches', 'Culture'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Whitewashed villages, caldera sunsets, and slow ferries between Santorini, Naxos, and Paros.',
  itinerary: [['Santorini', 'Caldera walk and a sunset in Oia.'], ['Naxos', 'Ferry over; mountain villages and beaches.'], ['Paros', 'Fishing harbors and sea kayaking.'], ['Island life', 'Cooking class and a winery visit.'], ['Free day', 'Beach time or boat trip.'], ['Delos', 'Ancient ruins by boat.'], ['Farewell', 'Last swim and transfers.']]
}, {
  id: 'safari',
  title: 'Serengeti Migration Safari',
  location: 'Serengeti, Tanzania',
  region: 'Africa',
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: '3 spots left',
  badgeTone: 'clay',
  rating: 4.9,
  reviews: 198,
  duration: '9 days',
  price: 3450,
  style: ['Wildlife', 'Adventure'],
  group: 'Max 8',
  level: 'Easy',
  summary: 'Track the great migration across endless plains, with sunrise game drives and nights under canvas.',
  itinerary: [['Arusha', 'Briefing and overnight lodge.'], ['Tarangire', 'Elephants and baobab country.'], ['Serengeti', 'First game drives on the plains.'], ['Migration', 'Follow the herds and river crossings.'], ['Ngorongoro', 'Crater floor full-day safari.'], ['Maasai village', 'Cultural visit and walking safari.'], ['Big cats', 'Dawn drive for lion and cheetah.'], ['Rest day', 'Camp and optional balloon ride.'], ['Departure', 'Fly out from Kilimanjaro.']]
}, {
  id: 'vietnam',
  title: 'Vietnam: Hanoi to Halong',
  location: 'Hanoi, Vietnam',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'New',
  badgeTone: 'pine',
  rating: 4.7,
  reviews: 142,
  duration: '8 days',
  price: 1490,
  style: ['Culture', 'Food'],
  group: 'Max 12',
  level: 'Easy',
  summary: 'Street food in the old quarter, terraced rice fields, and an overnight cruise through Halong Bay.',
  itinerary: [['Hanoi', 'Old quarter food walk.'], ['Ninh Binh', 'Rowboats through limestone karsts.'], ['Sapa', 'Trek between hill-tribe villages.'], ['Homestay', 'Night with a local family.'], ['Halong Bay', 'Overnight cruise and kayaking.'], ['Hoi An', 'Lantern town and tailors.'], ['Cooking', 'Market tour and class.'], ['Departure', 'Fly home from Da Nang.']]
}, {
  id: 'norway',
  title: 'Norwegian Fjords & Northern Lights',
  location: 'Troms\u00f8, Norway',
  region: 'Europe',
  image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: null,
  badgeTone: 'pine',
  rating: 4.8,
  reviews: 176,
  duration: '6 days',
  price: 2580,
  style: ['Adventure', 'Wildlife'],
  group: 'Max 10',
  level: 'Moderate',
  summary: 'Dog-sledding, fjord cruises, and aurora hunts above the Arctic Circle from a base in Troms\u00f8.',
  itinerary: [['Troms\u00f8', 'Arctic city and cable-car views.'], ['Fjord cruise', 'Silent electric boat among the peaks.'], ['Husky day', 'Dog-sledding across the tundra.'], ['Aurora night', 'Chase the northern lights.'], ['S\u00e1mi culture', 'Reindeer and traditional lavvu lunch.'], ['Departure', 'Morning at leisure, then home.']]
}, {
  id: 'newzealand',
  title: 'New Zealand South Island',
  location: 'Queenstown, New Zealand',
  region: 'Oceania',
  image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: 'Bestseller',
  badgeTone: 'marigold',
  rating: 4.9,
  reviews: 221,
  duration: '10 days',
  price: 2890,
  style: ['Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'Glaciers, fjords, and alpine lakes \u2014 a road trip through Middle-earth with hikes at every stop.',
  itinerary: [['Queenstown', 'Adventure capital welcome.'], ['Glenorchy', 'Lord of the Rings country.'], ['Wanaka', 'Lakeside and Roys Peak hike.'], ['Franz Josef', 'Glacier walk.'], ['Arthur\u2019s Pass', 'Alpine crossing.'], ['Aoraki', 'Mt Cook and stargazing.'], ['Te Anau', 'Gateway to the fjords.'], ['Milford Sound', 'Cruise the fjord.'], ['Catlins', 'Waterfalls and wildlife.'], ['Departure', 'Fly out from Dunedin.']]
}, {
  id: 'jordan',
  title: 'Petra & Wadi Rum Desert',
  location: 'Petra, Jordan',
  region: 'Asia',
  image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=70&auto=format&fit=crop',
  gallery: [],
  badge: '2 spots left',
  badgeTone: 'clay',
  rating: 4.8,
  reviews: 167,
  duration: '7 days',
  price: 1840,
  style: ['Culture', 'Adventure'],
  group: 'Max 12',
  level: 'Moderate',
  summary: 'Walk into the rose-red city of Petra, sleep in a desert camp, and float in the Dead Sea.',
  itinerary: [['Amman', 'Citadel and street food.'], ['Jerash', 'Roman ruins.'], ['Petra', 'The Treasury at dawn.'], ['Petra hikes', 'Monastery trail and high places.'], ['Wadi Rum', 'Jeep safari and desert camp.'], ['Dead Sea', 'Float and mud spa.'], ['Departure', 'Transfer to Amman.']]
}];
window.WF_REVIEWS = [{
  name: 'Mara Okafor',
  photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'May 2026',
  text: 'Our guide turned a great itinerary into the trip of a lifetime. Every detail was handled \u2014 we just had to show up and be amazed.'
}, {
  name: 'Liam Chen',
  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'Apr 2026',
  text: 'Small group meant we actually got to know each other. Pacing was perfect \u2014 challenging but never rushed.'
}, {
  name: 'Sofia Reyes',
  photo: null,
  rating: 4,
  date: 'Mar 2026',
  text: 'Beautiful trip and wonderful food. One travel day was long, but the views more than made up for it.'
}, {
  name: 'Tom Becker',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=70&auto=format&fit=crop',
  rating: 5,
  date: 'Feb 2026',
  text: 'Every detail was handled so I could just be present. The small group felt like travelling with friends by day two.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "wayfarer-template/assets/js/data.js", error: String((e && e.message) || e) }); }

// wayfarer-template/assets/js/ds-bundle.js
try { (() => {
/* @ds-bundle: {"format":3,"namespace":"DesignSystem_b5472a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"TripCard","sourcePath":"components/display/TripCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"667e02f95395","components/core/Button.jsx":"d68f4b4c32cd","components/core/IconButton.jsx":"20c2246573c3","components/core/Tag.jsx":"530d51eed22c","components/display/Avatar.jsx":"a034e51dcef1","components/display/Rating.jsx":"11597595e56d","components/display/Tabs.jsx":"3b00c57e286e","components/display/TripCard.jsx":"9889caee4875","components/forms/Checkbox.jsx":"2f365a8f3850","components/forms/Input.jsx":"eec15156adc5","components/forms/Select.jsx":"45dbd61da336","components/forms/Switch.jsx":"fb26f89f3ede","ui_kits/website/AboutScreen.jsx":"8d528e691221","ui_kits/website/BookNowScreen.jsx":"e597c540b8bd","ui_kits/website/ClientDashboardScreen.jsx":"19f7937fe13a","ui_kits/website/ContactScreen.jsx":"5998b60146d8","ui_kits/website/DashboardScreen.jsx":"374b4c0c7e1a","ui_kits/website/Footer.jsx":"c1ab3b302599","ui_kits/website/GalleryScreen.jsx":"c403cbabc498","ui_kits/website/Header.jsx":"d959d4de9ad5","ui_kits/website/HomeScreen.jsx":"7f737bf413e7","ui_kits/website/HomeTwoScreen.jsx":"26edbd823ff2","ui_kits/website/MiscScreens.jsx":"79fc9690be1a","ui_kits/website/ServicesScreen.jsx":"c9cdc0da69f4","ui_kits/website/TripScreen.jsx":"60ff868c696a","ui_kits/website/data.js":"f5d97be2ac6d","ui_kits/website/icons.jsx":"5491dedff304","ui_kits/website/util.jsx":"0573b5bec40a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.DesignSystem_b5472a = window.DesignSystem_b5472a || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/core/Badge.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Small status / category label. Tone sets the color family. */
      function Badge({
        children,
        tone = 'pine',
        variant = 'soft',
        iconLeft = null,
        style = {},
        ...rest
      }) {
        const tones = {
          pine: {
            soft: ['var(--pine-50)', 'var(--pine-700)'],
            solid: ['var(--pine-600)', '#fff']
          },
          marigold: {
            soft: ['var(--marigold-50)', 'var(--marigold-600)'],
            solid: ['var(--marigold-400)', 'var(--pine-900)']
          },
          clay: {
            soft: ['var(--clay-50)', 'var(--clay-500)'],
            solid: ['var(--clay-400)', '#fff']
          },
          success: {
            soft: ['var(--success-50)', 'var(--success-500)'],
            solid: ['var(--success-500)', '#fff']
          },
          warning: {
            soft: ['var(--warning-50)', 'var(--warning-500)'],
            solid: ['var(--warning-500)', '#fff']
          },
          error: {
            soft: ['var(--error-50)', 'var(--error-500)'],
            solid: ['var(--error-500)', '#fff']
          },
          neutral: {
            soft: ['var(--stone-100)', 'var(--stone-600)'],
            solid: ['var(--stone-700)', '#fff']
          }
        };
        const [bg, fg] = (tones[tone] || tones.pine)[variant] || (tones[tone] || tones.pine).soft;
        return /*#__PURE__*/React.createElement("span", _extends({
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: bg,
            color: fg,
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-snug)',
            lineHeight: 1,
            padding: '5px 10px',
            borderRadius: 'var(--radius-pill)',
            whiteSpace: 'nowrap',
            ...style
          }
        }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex'
          }
        }, iconLeft), children);
      }
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /**
       * Wayfarer Button — the primary action element.
       * Variants map to the brand palette: primary = Pine, accent = Marigold,
       * secondary = Clay outline, ghost = quiet.
       */
      function Button({
        children,
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        disabled = false,
        iconLeft = null,
        iconRight = null,
        type = 'button',
        onClick,
        style = {},
        ...rest
      }) {
        const sizes = {
          sm: {
            padding: '8px 14px',
            fontSize: 'var(--text-sm)',
            radius: 'var(--radius-sm)',
            gap: '6px'
          },
          md: {
            padding: '11px 20px',
            fontSize: 'var(--text-base)',
            radius: 'var(--radius-md)',
            gap: '8px'
          },
          lg: {
            padding: '15px 28px',
            fontSize: 'var(--text-md)',
            radius: 'var(--radius-lg)',
            gap: '10px'
          }
        };
        const variants = {
          primary: {
            background: 'var(--color-primary)',
            color: 'var(--text-on-primary)',
            border: '1.5px solid transparent'
          },
          accent: {
            background: 'var(--color-accent)',
            color: 'var(--text-on-accent)',
            border: '1.5px solid transparent'
          },
          secondary: {
            background: 'transparent',
            color: 'var(--color-primary)',
            border: '1.5px solid var(--border-default)'
          },
          ghost: {
            background: 'transparent',
            color: 'var(--color-primary)',
            border: '1.5px solid transparent'
          },
          inverse: {
            background: 'var(--stone-0)',
            color: 'var(--color-primary)',
            border: '1.5px solid transparent'
          }
        };
        const s = sizes[size] || sizes.md;
        const v = variants[variant] || variants.primary;
        const base = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: s.gap,
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: s.fontSize,
          lineHeight: 1,
          letterSpacing: 'var(--tracking-snug)',
          padding: s.padding,
          borderRadius: s.radius,
          cursor: disabled ? 'not-allowed' : 'pointer',
          width: fullWidth ? '100%' : 'auto',
          whiteSpace: 'nowrap',
          transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          opacity: disabled ? 0.5 : 1,
          boxShadow: variant === 'primary' || variant === 'accent' ? 'var(--shadow-xs)' : 'none',
          ...v,
          ...style
        };
        const hoverBg = {
          primary: 'var(--color-primary-hover)',
          accent: 'var(--color-accent-hover)',
          secondary: 'var(--surface-sunk)',
          ghost: 'var(--color-primary-soft)',
          inverse: 'var(--stone-100)'
        };
        return /*#__PURE__*/React.createElement("button", _extends({
          type: type,
          disabled: disabled,
          onClick: onClick,
          style: base,
          onMouseEnter: e => {
            if (!disabled) {
              e.currentTarget.style.background = hoverBg[variant];
              e.currentTarget.style.transform = 'translateY(-1px)';
            }
          },
          onMouseLeave: e => {
            if (!disabled) {
              e.currentTarget.style.background = v.background;
              e.currentTarget.style.transform = 'none';
            }
          },
          onMouseDown: e => {
            if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
          },
          onMouseUp: e => {
            if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
          }
        }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex'
          }
        }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex'
          }
        }, iconRight));
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/IconButton.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Square icon-only button. Pass a Lucide (or any) icon node as children. */
      function IconButton({
        children,
        variant = 'ghost',
        size = 'md',
        disabled = false,
        label,
        onClick,
        style = {},
        ...rest
      }) {
        const sizes = {
          sm: 32,
          md: 40,
          lg: 48
        };
        const dim = sizes[size] || sizes.md;
        const variants = {
          solid: {
            background: 'var(--color-primary)',
            color: 'var(--text-on-primary)',
            border: '1px solid transparent'
          },
          ghost: {
            background: 'transparent',
            color: 'var(--text-body)',
            border: '1px solid transparent'
          },
          outline: {
            background: 'var(--surface-card)',
            color: 'var(--text-body)',
            border: '1px solid var(--border-default)'
          }
        };
        const v = variants[variant] || variants.ghost;
        const hoverBg = {
          solid: 'var(--color-primary-hover)',
          ghost: 'var(--surface-sunk)',
          outline: 'var(--surface-sunk)'
        };
        return /*#__PURE__*/React.createElement("button", _extends({
          type: "button",
          "aria-label": label,
          disabled: disabled,
          onClick: onClick,
          style: {
            width: dim,
            height: dim,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-md)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
            ...v,
            ...style
          },
          onMouseEnter: e => {
            if (!disabled) e.currentTarget.style.background = hoverBg[variant];
          },
          onMouseLeave: e => {
            if (!disabled) e.currentTarget.style.background = v.background;
          },
          onMouseDown: e => {
            if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
          },
          onMouseUp: e => {
            if (!disabled) e.currentTarget.style.transform = 'none';
          }
        }, rest), children);
      }
      Object.assign(__ds_scope, {
        IconButton
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/IconButton.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Tag.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Selectable filter chip — used in search facets and category rails. */
      function Tag({
        children,
        selected = false,
        iconLeft = null,
        onClick,
        style = {},
        ...rest
      }) {
        const clickable = typeof onClick === 'function';
        return /*#__PURE__*/React.createElement("button", _extends({
          type: "button",
          onClick: onClick,
          "aria-pressed": clickable ? selected : undefined,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1,
            padding: '9px 15px',
            borderRadius: 'var(--radius-pill)',
            cursor: clickable ? 'pointer' : 'default',
            background: selected ? 'var(--color-primary)' : 'var(--surface-card)',
            color: selected ? 'var(--text-on-primary)' : 'var(--text-body)',
            border: selected ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-default)',
            transition: 'all var(--dur-fast) var(--ease-out)',
            whiteSpace: 'nowrap',
            ...style
          },
          onMouseEnter: e => {
            if (clickable && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)';
          },
          onMouseLeave: e => {
            if (clickable && !selected) e.currentTarget.style.borderColor = 'var(--border-default)';
          }
        }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex'
          }
        }, iconLeft), children);
      }
      Object.assign(__ds_scope, {
        Tag
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Tag.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Avatar.jsx
  try {
    (() => {
      /** Circular avatar with image or initials fallback. */
      function Avatar({
        src,
        name = '',
        size = 'md',
        ring = false,
        style = {}
      }) {
        const px = {
          xs: 24,
          sm: 32,
          md: 40,
          lg: 56,
          xl: 72
        }[size] || 40;
        const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
        const fontSize = px * 0.38;
        return /*#__PURE__*/React.createElement("span", {
          title: name,
          style: {
            width: px,
            height: px,
            borderRadius: '50%',
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--pine-100)',
            color: 'var(--pine-700)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-bold)',
            fontSize,
            overflow: 'hidden',
            border: ring ? '2px solid var(--surface-card)' : 'none',
            boxShadow: ring ? 'var(--shadow-sm)' : 'none',
            ...style
          }
        }, src ? /*#__PURE__*/React.createElement("img", {
          src: src,
          alt: name,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }) : initials);
      }
      Object.assign(__ds_scope, {
        Avatar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Avatar.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Rating.jsx
  try {
    (() => {
      /** Star rating display. value 0–5 (halves ok). Shows numeric value + review count. */
      function Rating({
        value = 0,
        reviews,
        size = 'md',
        showValue = true,
        style = {}
      }) {
        const px = {
          sm: 14,
          md: 17,
          lg: 20
        }[size] || 17;
        const font = {
          sm: 'var(--text-sm)',
          md: 'var(--text-base)',
          lg: 'var(--text-md)'
        }[size] || 'var(--text-base)';
        const Star = ({
          fill
        }) => /*#__PURE__*/React.createElement("svg", {
          width: px,
          height: px,
          viewBox: "0 0 24 24",
          style: {
            display: 'block'
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: `g${fill}`
        }, /*#__PURE__*/React.createElement("stop", {
          offset: `${fill * 100}%`,
          stopColor: "var(--marigold-400)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: `${fill * 100}%`,
          stopColor: "var(--stone-200)"
        }))), /*#__PURE__*/React.createElement("path", {
          d: "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z",
          fill: `url(#g${fill})`
        }));
        const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, value - i)));
        return /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            gap: '1px'
          }
        }, stars.map((f, i) => /*#__PURE__*/React.createElement(Star, {
          key: i,
          fill: f
        }))), showValue && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: font,
            color: 'var(--text-strong)'
          }
        }, value.toFixed(1)), reviews != null && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: font,
            color: 'var(--text-muted)'
          }
        }, "(", reviews.toLocaleString(), ")"));
      }
      Object.assign(__ds_scope, {
        Rating
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Rating.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Tabs.jsx
  try {
    (() => {
      /** Underline tab bar. Controlled via `value` + `onChange(id)`. */
      function Tabs({
        tabs = [],
        value,
        onChange,
        style = {}
      }) {
        const items = tabs.map(t => typeof t === 'string' ? {
          id: t,
          label: t
        } : t);
        const active = value ?? items[0]?.id;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: '4px',
            borderBottom: '1.5px solid var(--border-subtle)',
            ...style
          }
        }, items.map(t => {
          const on = t.id === active;
          return /*#__PURE__*/React.createElement("button", {
            key: t.id,
            type: "button",
            onClick: () => onChange && onChange(t.id),
            style: {
              position: 'relative',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-base)',
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              padding: '12px 16px',
              transition: 'color var(--dur-fast) var(--ease-out)'
            },
            onMouseEnter: e => {
              if (!on) e.currentTarget.style.color = 'var(--text-body)';
            },
            onMouseLeave: e => {
              if (!on) e.currentTarget.style.color = 'var(--text-muted)';
            }
          }, t.label, /*#__PURE__*/React.createElement("span", {
            style: {
              position: 'absolute',
              left: 12,
              right: 12,
              bottom: -1.5,
              height: 3,
              borderRadius: '3px 3px 0 0',
              background: on ? 'var(--color-primary)' : 'transparent',
              transition: 'background var(--dur-fast) var(--ease-out)'
            }
          }));
        }));
      }
      Object.assign(__ds_scope, {
        Tabs
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Tabs.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/TripCard.jsx
  try {
    (() => {
      /**
       * Wayfarer's signature product card — a tour/destination with photo,
       * overlay badge + save button, title, location, rating, duration, and price.
       */
      function TripCard({
        image,
        title,
        location,
        price,
        currency = '$',
        duration,
        rating,
        reviews,
        badge,
        badgeTone = 'marigold',
        saved = false,
        onSave,
        onClick,
        style = {}
      }) {
        const [hover, setHover] = React.useState(false);
        return /*#__PURE__*/React.createElement("div", {
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            cursor: onClick ? 'pointer' : 'default',
            boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
            transform: hover ? 'translateY(-4px)' : 'none',
            transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: image,
          alt: title,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)'
          }
        }), badge && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 12,
            left: 12
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
          tone: badgeTone,
          variant: "solid"
        }, badge)), /*#__PURE__*/React.createElement("button", {
          type: "button",
          "aria-label": saved ? 'Saved' : 'Save trip',
          onClick: e => {
            e.stopPropagation();
            onSave && onSave(!saved);
          },
          style: {
            position: 'absolute',
            top: 10,
            right: 10,
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(4px)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }
        }, /*#__PURE__*/React.createElement("svg", {
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          fill: saved ? 'var(--clay-400)' : 'none',
          stroke: saved ? 'var(--clay-400)' : 'var(--stone-600)',
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '16px 18px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }
        }, location && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--text-muted)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-medium)'
          }
        }, /*#__PURE__*/React.createElement("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "10",
          r: "3"
        })), location), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-snug)',
            color: 'var(--text-strong)',
            lineHeight: 'var(--leading-snug)'
          }
        }, title), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }
        }, rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
          value: rating,
          reviews: reviews,
          size: "sm"
        }), duration && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--border-default)'
          }
        }, "\xB7"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)'
          }
        }, duration))), price != null && /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: '4px',
            display: 'flex',
            alignItems: 'baseline',
            gap: '5px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, "from"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--text-strong)'
          }
        }, currency, price), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)'
          }
        }, "/ person")), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: '16px'
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
          variant: "outline",
          style: {
            width: '100%',
            justifyContent: 'center'
          }
        }, "View Trip"))));
      }
      Object.assign(__ds_scope, {
        TripCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/TripCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Checkbox.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Checkbox with label. Controlled via `checked` + `onChange`. */
      function Checkbox({
        label,
        checked = false,
        onChange,
        disabled = false,
        style = {},
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-body)',
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 20,
            height: 20,
            flexShrink: 0,
            borderRadius: 'var(--radius-xs)',
            background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
            border: checked ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-strong)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--dur-fast) var(--ease-out)'
          }
        }, checked && /*#__PURE__*/React.createElement("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M2.5 6.2L4.8 8.5L9.5 3.5",
          stroke: "#fff",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), /*#__PURE__*/React.createElement("input", _extends({
          type: "checkbox",
          checked: checked,
          onChange: onChange,
          disabled: disabled,
          style: {
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0
          }
        }, rest)), label);
      }
      Object.assign(__ds_scope, {
        Checkbox
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Checkbox.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Text input with optional label, leading icon, and helper/error text. */
      function Input({
        label,
        placeholder,
        value,
        onChange,
        type = 'text',
        iconLeft = null,
        helper,
        error,
        disabled = false,
        id,
        style = {},
        ...rest
      }) {
        const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
        const [focus, setFocus] = React.useState(false);
        const borderColor = error ? 'var(--error-500)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            width: '100%',
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: inputId,
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--text-strong)'
          }
        }, label), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            padding: '0 14px',
            height: '46px',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
            boxShadow: focus ? 'var(--ring)' : 'none'
          }
        }, iconLeft && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            color: 'var(--text-muted)'
          }
        }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
          id: inputId,
          type: type,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          disabled: disabled,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-strong)',
            minWidth: 0
          }
        }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-xs)',
            color: error ? 'var(--error-500)' : 'var(--text-muted)'
          }
        }, error || helper));
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Styled native select with label. Pass options as [{value,label}] or strings. */
      function Select({
        label,
        options = [],
        value,
        onChange,
        iconLeft = null,
        disabled = false,
        id,
        style = {},
        ...rest
      }) {
        const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
        const opts = options.map(o => typeof o === 'string' ? {
          value: o,
          label: o
        } : o);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            width: '100%',
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: selId,
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--text-strong)'
          }
        }, label), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
            border: '1.5px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            padding: '0 14px',
            height: '46px'
          }
        }, iconLeft && /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            color: 'var(--text-muted)',
            marginRight: '10px'
          }
        }, iconLeft), /*#__PURE__*/React.createElement("select", _extends({
          id: selId,
          value: value,
          onChange: onChange,
          disabled: disabled,
          style: {
            flex: 1,
            appearance: 'none',
            WebkitAppearance: 'none',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-strong)',
            cursor: 'pointer',
            paddingRight: '20px'
          }
        }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
          key: o.value,
          value: o.value
        }, o.label))), /*#__PURE__*/React.createElement("span", {
          "aria-hidden": "true",
          style: {
            position: 'absolute',
            right: '14px',
            pointerEvents: 'none',
            color: 'var(--text-muted)',
            fontSize: '12px'
          }
        }, "\u25BE")));
      }
      Object.assign(__ds_scope, {
        Select
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Switch.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Toggle switch. Controlled via `checked` + `onChange(nextBool)`. */
      function Switch({
        checked = false,
        onChange,
        disabled = false,
        label,
        style = {},
        ...rest
      }) {
        const toggle = () => {
          if (!disabled && onChange) onChange(!checked);
        };
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-body)',
            ...style
          }
        }, /*#__PURE__*/React.createElement("button", _extends({
          type: "button",
          role: "switch",
          "aria-checked": checked,
          onClick: toggle,
          disabled: disabled,
          style: {
            width: 44,
            height: 26,
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            position: 'relative',
            cursor: disabled ? 'not-allowed' : 'pointer',
            background: checked ? 'var(--color-primary)' : 'var(--stone-300)',
            transition: 'background var(--dur-base) var(--ease-out)',
            flexShrink: 0,
            padding: 0
          }
        }, rest), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: 3,
            left: checked ? 21 : 3,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: 'var(--shadow-sm)',
            transition: 'left var(--dur-base) var(--ease-out)'
          }
        })), label);
      }
      Object.assign(__ds_scope, {
        Switch
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Switch.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/AboutScreen.jsx
  try {
    (() => {
      // About: story, mission, stats, team. window.AboutScreen.
      function AboutScreen({
        onNav
      }) {
        const {
          Button,
          Avatar,
          Badge
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const stats = [['40+', 'Countries'], ['12', 'Avg. group size'], ['9,400', 'Happy travelers'], ['4.9', 'Avg. trip rating']];
        const team = [{
          name: 'Mara Okafor',
          role: 'Founder & lead guide',
          photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=70&auto=format&fit=crop'
        }, {
          name: 'Liam Chen',
          role: 'Head of trips',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&q=70&auto=format&fit=crop'
        }, {
          name: 'Sofia Reyes',
          role: 'Traveler care',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&q=70&auto=format&fit=crop'
        }, {
          name: 'Diego Marín',
          role: 'Local partnerships',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&q=70&auto=format&fit=crop'
        }];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            minHeight: 380,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=75&auto=format&fit=crop",
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(6,53,42,0.82), rgba(6,53,42,0.4))'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 24px',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--marigold-300)'
          }
        }, "Our story"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 52,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: '12px 0 0',
            maxWidth: 640
          }
        }, "We believe the best trips are led by locals."))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 820,
            margin: '0 auto',
            padding: '64px 24px 40px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            lineHeight: 1.5,
            color: 'var(--text-strong)',
            margin: 0
          }
        }, "Wayfarer started with a simple idea: that a place is best understood through the people who call it home. So we built small-group trips around local guides \u2014 and kept them small on purpose."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 17,
            lineHeight: 1.7,
            color: 'var(--text-body)',
            margin: '24px 0 0'
          }
        }, "Today we run guided journeys in more than forty countries, capped at a dozen travelers, with characterful stays and time built in to wander. We handle the logistics so you can be present for the trip.")), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 24px 56px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20
          }
        }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '26px 20px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 40,
            fontWeight: 600,
            color: 'var(--color-primary)'
          }
        }, n), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)',
            marginTop: 4
          }
        }, l))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 24px 56px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24
          }
        }, [['HeartHandshake', 'Local first', 'Guides and partners are from the places we visit — and paid fairly for it.'], ['Leaf', 'Light footprint', 'Carbon-offset travel, small groups, and locally owned stays.'], ['ShieldCheck', 'Care, always', 'Free cancellation up to 30 days out and 24/7 on-trip support.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 28
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 48,
            height: 48,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 24,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontSize: 19,
            fontWeight: 700,
            color: 'var(--text-strong)',
            margin: '0 0 8px'
          }
        }, h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, p))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 24px 24px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 34,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 24px',
            textAlign: 'center'
          }
        }, "The people behind the trips"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24
          }
        }, team.map((m, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: m.photo,
          alt: m.name,
          style: {
            width: '100%',
            aspectRatio: '1',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 12
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, m.name), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, m.role))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px 72px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-inverse)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 40px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            fontWeight: 600,
            color: 'var(--stone-50)',
            margin: '0 0 16px'
          }
        }, "Ready to go further?"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('services')
        }, "Browse trips"), /*#__PURE__*/React.createElement(Button, {
          variant: "inverse",
          size: "lg",
          onClick: () => onNav('contact')
        }, "Talk to us")))));
      }
      window.AboutScreen = AboutScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/AboutScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/BookNowScreen.jsx
  try {
    (() => {
      // Multi-step booking: trip & date → travelers → details → payment → confirmation. window.BookNowScreen.
      function BookNowScreen({
        tripId,
        onNav
      }) {
        const {
          Button,
          Input,
          Select,
          Switch,
          Checkbox,
          Badge
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const isNarrow = window.useMediaQuery('(max-width: 640px)');
        const trips = window.WF_TRIPS;
        const [tid, setTid] = React.useState(tripId || trips[0].id);
        const t = trips.find(x => x.id === tid) || trips[0];
        const steps = ['Trip & date', 'Travelers', 'Your details', 'Payment'];
        const [step, setStep] = React.useState(0);
        const [date, setDate] = React.useState(14);
        const [travelers, setTravelers] = React.useState(2);
        const [insurance, setInsurance] = React.useState(true);
        const [form, setForm] = React.useState({
          first: '',
          last: '',
          email: '',
          phone: ''
        });
        const [errors, setErrors] = React.useState({});
        const subtotal = t.price * travelers;
        const fees = Math.round(subtotal * 0.04);
        const ins = insurance ? 89 * travelers : 0;
        const total = subtotal + fees + ins;

        // available departure days in September (demo)
        const avail = {
          14: true,
          5: true,
          21: true,
          28: true,
          2: true
        };
        const firstDow = 1; // Sep 2026 starts Tuesday-ish (demo)

        function validateDetails() {
          const e = {};
          if (!form.first.trim()) e.first = 'Required';
          if (!form.last.trim()) e.last = 'Required';
          if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email';
          if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone';
          setErrors(e);
          return Object.keys(e).length === 0;
        }
        function next() {
          if (step === 2 && !validateDetails()) return;
          setStep(s => Math.min(s + 1, steps.length));
        }
        const set = k => e => setForm({
          ...form,
          [k]: e.target.value
        });
        if (step >= steps.length) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              background: 'var(--surface-canvas)',
              minHeight: 560,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 48,
              maxWidth: 480,
              textAlign: 'center',
              boxShadow: 'var(--shadow-lg)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--success-50)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 22px'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "Check",
            size: 36,
            color: "var(--success-500)",
            strokeWidth: 2.5
          })), /*#__PURE__*/React.createElement("h1", {
            style: {
              fontFamily: 'var(--font-display)',
              fontSize: 32,
              fontWeight: 600,
              color: 'var(--text-strong)',
              margin: '0 0 10px'
            }
          }, "You're going, ", form.first || 'traveler', "!"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 8px'
            }
          }, "Your spot on ", /*#__PURE__*/React.createElement("strong", {
            style: {
              color: 'var(--text-strong)'
            }
          }, t.title), " departing Sep ", date, " is reserved. A confirmation is on its way to ", form.email || 'your inbox', "."), /*#__PURE__*/React.createElement("div", {
            className: "u-mono",
            style: {
              fontSize: 14,
              color: 'var(--text-muted)',
              margin: '0 0 24px'
            },
            "data-ltr": true
          }, "Booking ref \xB7 WF-2K9X4"), /*#__PURE__*/React.createElement(Button, {
            variant: "primary",
            size: "lg",
            onClick: () => onNav('home')
          }, "Back to home")));
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '28px 24px'
          }
        }, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '0 0 20px'
          }
        }, "Book your trip"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: isNarrow ? '1fr 1fr' : undefined,
            ...(isNarrow ? {} : {
              display: 'flex'
            }),
            alignItems: 'center',
            gap: isNarrow ? 10 : 0,
            marginBottom: 28,
            flexWrap: 'wrap'
          }
        }, steps.map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: isNarrow ? i === step ? 'var(--color-primary-soft)' : 'var(--surface-card)' : 'transparent',
            border: isNarrow ? '1px solid var(--border-subtle)' : 'none',
            borderRadius: isNarrow ? 'var(--radius-md)' : 0,
            padding: isNarrow ? '10px 12px' : 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 32,
            height: 32,
            borderRadius: '50%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 14,
            fontFamily: 'var(--font-mono)',
            background: i < step ? 'var(--color-primary)' : i === step ? 'var(--color-primary)' : 'var(--surface-sunk)',
            color: i <= step ? 'var(--text-on-primary)' : 'var(--text-muted)',
            border: i === step ? '2px solid var(--color-primary)' : 'none'
          }
        }, i < step ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: i === step ? 700 : 500,
            color: i === step ? 'var(--text-strong)' : 'var(--text-muted)'
          }
        }, label)), !isNarrow && i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 24,
            height: 2,
            background: i < step ? 'var(--color-primary)' : 'var(--border-default)',
            margin: '0 12px'
          }
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 32,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 28
          }
        }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
          label: "Choose your trip",
          value: tid,
          onChange: e => setTid(e.target.value),
          options: trips.map(x => ({
            value: x.id,
            label: x.title
          })),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Compass",
            size: 18
          })
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 22,
            fontWeight: 700,
            fontSize: 15,
            color: 'var(--text-strong)',
            marginBottom: 6
          }
        }, "Select a departure \xB7 September 2026"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)',
            margin: '0 0 14px'
          }
        }, "Highlighted dates have guaranteed availability."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 6
          }
        }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--text-muted)',
            padding: '4px 0'
          }
        }, d)), Array.from({
          length: firstDow
        }).map((_, i) => /*#__PURE__*/React.createElement("div", {
          key: 'e' + i
        })), Array.from({
          length: 30
        }).map((_, i) => {
          const day = i + 1;
          const ok = avail[day];
          const on = date === day && ok;
          return /*#__PURE__*/React.createElement("button", {
            key: day,
            disabled: !ok,
            onClick: () => setDate(day),
            style: {
              aspectRatio: '1',
              minHeight: 44,
              border: on ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              background: on ? 'var(--color-primary)' : ok ? 'var(--color-primary-soft)' : 'transparent',
              color: on ? 'var(--text-on-primary)' : ok ? 'var(--text-strong)' : 'var(--text-muted)',
              fontWeight: ok ? 700 : 400,
              cursor: ok ? 'pointer' : 'default',
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              opacity: ok ? 1 : 0.4
            }
          }, day);
        }))), step === 1 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement(Select, {
          label: "Travelers",
          value: String(travelers),
          onChange: e => setTravelers(Number(e.target.value)),
          options: [1, 2, 3, 4].map(n => ({
            value: String(n),
            label: n + (n === 1 ? ' traveler' : ' travelers')
          })),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Users",
            size: 18
          })
        }), /*#__PURE__*/React.createElement(Switch, {
          label: "Add travel insurance ($89 / person)",
          checked: insurance,
          onChange: setInsurance
        }), /*#__PURE__*/React.createElement(Checkbox, {
          label: "I'd like a private room (if available)",
          checked: false,
          onChange: () => {}
        }), /*#__PURE__*/React.createElement(Checkbox, {
          label: "I have dietary requirements",
          checked: false,
          onChange: () => {}
        })), step === 2 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "First name",
          value: form.first,
          onChange: set('first'),
          error: errors.first,
          placeholder: "Jordan"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Last name",
          value: form.last,
          onChange: set('last'),
          error: errors.last,
          placeholder: "Rivera"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Email",
          type: "email",
          value: form.email,
          onChange: set('email'),
          error: errors.email,
          placeholder: "you@email.com",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Mail",
            size: 18
          })
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Phone",
          value: form.phone,
          onChange: set('phone'),
          error: errors.phone,
          placeholder: "+1 (555) 000-0000",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Phone",
            size: 18
          })
        })), step === 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Card number",
          placeholder: "1234 5678 9012 3456",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "CreditCard",
            size: 18
          })
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Expiry",
          placeholder: "MM / YY"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "CVC",
          placeholder: "123"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 4
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: "success",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "ShieldCheck",
            size: 14,
            color: "var(--success-500)"
          })
        }, "Secured \xB7 you won't be charged until 30 days before departure"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 28
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          onClick: () => step === 0 ? onNav('trip') : setStep(step - 1),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "ChevronLeft",
            size: 18,
            color: "var(--color-primary)"
          })
        }, "Back"), /*#__PURE__*/React.createElement(Button, {
          variant: step === steps.length - 1 ? 'accent' : 'primary',
          size: "lg",
          onClick: next
        }, step === steps.length - 1 ? 'Confirm & reserve' : 'Continue'))), /*#__PURE__*/React.createElement("aside", {
          style: {
            position: 'sticky',
            top: 96,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 120
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: t.image,
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'var(--scrim-bottom)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 16,
            bottom: 12,
            right: 16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 19,
            fontWeight: 600,
            color: '#fff'
          }
        }, t.title), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--stone-100)'
          }
        }, t.location, " \xB7 ", t.duration, " \xB7 Sep ", date))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 22
          }
        }, [[`$${t.price} × ${travelers}`, subtotal], ['Booking fees', fees]].concat(insurance ? [[`Insurance × ${travelers}`, ins]] : []).map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 15,
            color: 'var(--text-body)',
            marginBottom: 12
          }
        }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          "data-ltr": true
        }, "$", v.toLocaleString()))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            paddingTop: 14,
            borderTop: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 17,
            color: 'var(--text-strong)'
          }
        }, "Total"), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          "data-ltr": true,
          style: {
            fontWeight: 600,
            fontSize: 24,
            color: 'var(--text-strong)'
          }
        }, "$", total.toLocaleString()))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginTop: 32
          }
        }, [['ShieldCheck', 'Free cancellation', '30 days before departure'], ['Lock', 'Secure payment', '256-bit encryption'], ['CalendarClock', 'No payment today', 'Reserve, pay later'], ['Headphones', '24/7 support', 'Real humans, always']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 22,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, p))))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 32,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 28
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 18px'
          }
        }, "What's included in ", t.title), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px 40px'
          }
        }, ['Local expert guide throughout', 'All accommodation, locally owned', 'Listed activities & entrance fees', 'Most breakfasts & a welcome dinner', 'Airport transfers on trip dates', 'Small group, capped at ' + t.group.replace('Max ', '')].map((label, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Check",
          size: 16,
          color: "var(--success-500)",
          strokeWidth: 2.5
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 15,
            color: 'var(--text-body)'
          }
        }, label))))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 32,
            marginBottom: 8,
            background: 'var(--color-primary-soft)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            display: 'flex',
            gap: 20,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Quote",
          size: 36,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            lineHeight: 1.5,
            color: 'var(--text-strong)',
            margin: '0 0 8px'
          }
        }, "\u201CBooking took five minutes and every promise held up on the ground. The best trip we've taken.\u201D"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, "\u2014 Liam Chen, booked ", t.title)))));
      }
      window.BookNowScreen = BookNowScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/BookNowScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/ClientDashboardScreen.jsx
  try {
    (() => {
      // Traveler (client) dashboard — manage bookings, itineraries, documents, updates.
      // window.ClientDashboardScreen.

      // Isolated countdown — only THIS component re-renders each second, so the rest
      // of the dashboard (and its images) never blink.
      function Countdown({
        target
      }) {
        const [now, setNow] = React.useState(Date.now());
        React.useEffect(() => {
          const id = setInterval(() => setNow(Date.now()), 1000);
          return () => clearInterval(id);
        }, []);
        const diff = Math.max(0, target - now);
        const cd = [[Math.floor(diff / 86400000), 'days'], [Math.floor(diff / 3600000) % 24, 'hrs'], [Math.floor(diff / 60000) % 60, 'min'], [Math.floor(diff / 1000) % 60, 'sec']];
        return /*#__PURE__*/React.createElement(React.Fragment, null, cd.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            minWidth: 62,
            textAlign: 'center',
            background: 'rgba(255,255,255,0.14)',
            backdropFilter: 'blur(6px)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 8px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 24,
            fontWeight: 600,
            color: '#fff'
          }
        }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            color: 'var(--stone-200)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }
        }, l))));
      }
      function ClientDashboardScreen({
        onNav,
        onOpenTrip,
        theme,
        onToggleTheme
      }) {
        const {
          Badge,
          Avatar,
          Button,
          Rating,
          TripCard
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const trips = window.WF_TRIPS;
        const next = trips.find(t => t.id === 'kyoto') || trips[0];
        const [section, setSection] = React.useState('Overview');
        const [openDay, setOpenDay] = React.useState(0);
        const [docs, setDocs] = React.useState([{
          name: 'Passport.pdf',
          type: 'Passport',
          status: 'Verified',
          tone: 'success'
        }, {
          name: 'Travel-insurance.pdf',
          type: 'Insurance',
          status: 'In review',
          tone: 'warning'
        }, {
          name: null,
          type: 'Japan visa',
          status: 'Action needed',
          tone: 'error'
        }, {
          name: 'Emergency-contact',
          type: 'Emergency contact',
          status: 'Complete',
          tone: 'success'
        }]);
        const fileRef = React.useRef(null);
        const [pendingType, setPendingType] = React.useState(null);
        const nav = [['Overview', 'LayoutDashboard'], ['My trips', 'Luggage'], ['Itinerary', 'Map'], ['Documents', 'FileText'], ['Updates', 'Bell'], ['Profile', 'User']];
        const bookings = [{
          trip: next,
          date: 'Sep 14, 2026',
          status: 'Confirmed',
          tone: 'success',
          ref: 'WF-2K9X4',
          when: 'upcoming'
        }, {
          trip: trips.find(t => t.id === 'iceland') || trips[3],
          date: 'Oct 21, 2026',
          status: 'Payment due',
          tone: 'warning',
          ref: 'WF-7H3L2',
          when: 'upcoming'
        }, {
          trip: trips.find(t => t.id === 'amalfi') || trips[4],
          date: 'May 3, 2025',
          status: 'Completed',
          tone: 'neutral',
          ref: 'WF-1A0P8',
          when: 'past'
        }];
        const updates = [['UserCheck', 'pine', 'Your guide is confirmed', 'Mara Okafor will lead your Kyoto trip. She has 9 years of experience in the region.', '2 days ago'], ['Plane', 'marigold', 'Flight details received', 'We\u2019ve logged your arrival into Kansai (KIX) on Sep 13. Airport transfer is arranged.', '5 days ago'], ['ListChecks', 'pine', 'Pre-trip checklist ready', 'Your packing list and what-to-know guide for Kyoto are now available.', '1 week ago'], ['CloudSun', 'clay', 'Weather note for Kyoto', 'Expect mild 18\u201324\u00b0C days in September. Pack light layers and a rain shell.', '1 week ago'], ['Users', 'pine', 'Meet your travel group', 'You\u2019ll be travelling with 9 others from 4 countries. Say hello in the group chat.', '2 weeks ago'], ['CreditCard', 'marigold', 'Balance reminder', 'Your remaining balance is due 30 days before departure. No action needed yet.', '2 weeks ago'], ['BookOpen', 'pine', 'Kyoto reading list added', 'A short guide to temple etiquette, tea culture, and local phrases is in your docs.', '3 weeks ago']];

        // countdown to departure (demo: 56 days out) — isolated below so the page doesn't re-render each tick
        const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 56, []);
        function pickFile(type) {
          setPendingType(type);
          fileRef.current && fileRef.current.click();
        }
        function onFile(e) {
          const f = e.target.files && e.target.files[0];
          if (f && pendingType) setDocs(d => d.map(x => x.type === pendingType ? {
            ...x,
            name: f.name,
            status: 'In review',
            tone: 'warning'
          } : x));
          setPendingType(null);
          e.target.value = '';
        }
        const docComplete = docs.filter(d => d.tone === 'success').length;

        // --- reusable bits ---
        const Panel = ({
          title,
          action,
          children
        }) => /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontSize: 16,
            fontWeight: 700,
            color: 'var(--text-strong)',
            margin: 0
          }
        }, title), action), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 20
          }
        }, children));
        const NextTripHero = () => /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            minHeight: 240,
            display: 'flex',
            alignItems: 'flex-end',
            boxShadow: 'var(--shadow-md)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: next.image,
          alt: next.title,
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(6,53,42,0.92) 0%, rgba(6,53,42,0.35) 60%, rgba(6,53,42,0.1) 100%)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            padding: '28px 30px',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
          tone: "marigold",
          variant: "solid"
        }, "Next departure"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            color: '#fff',
            margin: '12px 0 4px'
          }
        }, next.title), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: 'var(--stone-100)',
            fontSize: 15
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "MapPin",
          size: 16,
          color: "var(--marigold-300)"
        }), next.location), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Calendar",
          size: 16,
          color: "var(--marigold-300)"
        }), "Sep 14, 2026"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Countdown, {
          target: target
        }))));
        const BookingCard = ({
          b
        }) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 14
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: b.trip.image,
          alt: "",
          style: {
            width: 84,
            height: 84,
            borderRadius: 'var(--radius-md)',
            objectFit: 'cover',
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 4
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: b.tone
        }, b.status), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          "data-ltr": true,
          style: {
            fontSize: 12,
            color: 'var(--text-muted)'
          }
        }, b.ref)), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, b.trip.title), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13.5,
            color: 'var(--text-muted)',
            display: 'flex',
            gap: 12,
            marginTop: 2
          }
        }, /*#__PURE__*/React.createElement("span", null, b.trip.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, b.trip.duration))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: b.when === 'past' ? 'secondary' : 'primary',
          onClick: () => onOpenTrip(b.trip.id)
        }, b.when === 'past' ? 'Rebook' : 'View trip'), b.status === 'Payment due' && /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "accent",
          onClick: () => onNav('book')
        }, "Pay now")));
        const DocRow = ({
          d
        }) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 0',
            borderTop: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-md)',
            background: d.name ? 'var(--color-primary-soft)' : 'var(--surface-sunk)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: d.name ? 'FileCheck' : 'FilePlus',
          size: 20,
          color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 15,
            color: 'var(--text-strong)'
          }
        }, d.type), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, d.name || 'Not uploaded yet')), /*#__PURE__*/React.createElement(Badge, {
          tone: d.tone
        }, d.status), /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: d.name ? 'ghost' : 'secondary',
          onClick: () => pickFile(d.type),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: d.name ? 'RefreshCw' : 'Upload',
            size: 15,
            color: "var(--color-primary)"
          })
        }, d.name ? 'Replace' : 'Upload'));
        const isNarrow = window.useMediaQuery('(max-width: 900px)');
        const [navOpen, setNavOpen] = React.useState(false);
        React.useEffect(() => {
          setNavOpen(false);
        }, [section]);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)',
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("input", {
          ref: fileRef,
          type: "file",
          onChange: onFile,
          style: {
            display: 'none'
          }
        }), isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
          onClick: () => setNavOpen(false),
          style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 79
          }
        }), /*#__PURE__*/React.createElement("aside", {
          style: isNarrow ? {
            position: 'fixed',
            top: 0,
            insetInlineStart: 0,
            width: 280,
            height: '100vh',
            zIndex: 80,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--surface-card)',
            borderInlineEnd: '1px solid var(--border-subtle)',
            padding: 16,
            transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
            transition: 'transform var(--dur-base) var(--ease-out)',
            boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
          } : {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--surface-card)',
            borderInlineEnd: '1px solid var(--border-subtle)',
            padding: 16
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            padding: '6px 8px 18px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WF_LOGO,
          width: "34",
          height: "34",
          alt: ""
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)'
          }
        }, "Wayfarer")), /*#__PURE__*/React.createElement("nav", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }
        }, nav.map(([label, ic]) => {
          const on = section === label;
          return /*#__PURE__*/React.createElement("button", {
            key: label,
            onClick: () => setSection(label),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              padding: '11px 12px',
              minHeight: 44,
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              background: on ? 'var(--color-primary-soft)' : 'transparent',
              color: on ? 'var(--color-primary)' : 'var(--text-body)',
              fontWeight: on ? 700 : 500,
              fontSize: 14.5,
              textAlign: 'start'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 19,
            color: on ? 'var(--color-primary)' : 'var(--text-muted)'
          }), label, label === 'Updates' && /*#__PURE__*/React.createElement("span", {
            style: {
              marginInlineStart: 'auto',
              fontSize: 11,
              fontWeight: 700,
              color: '#fff',
              background: 'var(--clay-400)',
              borderRadius: 'var(--radius-pill)',
              minWidth: 18,
              height: 18,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 5px'
            }
          }, updates.length));
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 'auto',
            paddingTop: 12
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            padding: '11px 12px',
            minHeight: 44,
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: 'pointer',
            background: 'transparent',
            color: 'var(--text-body)',
            fontSize: 14.5,
            width: '100%',
            textAlign: 'start'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "LogOut",
          size: 19,
          color: "var(--text-muted)"
        }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '16px 28px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--surface-card)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flex: 1,
            minWidth: 0
          }
        }, isNarrow && /*#__PURE__*/React.createElement("button", {
          onClick: () => setNavOpen(true),
          "aria-label": "Menu",
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-strong)',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Menu",
          size: 22
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            lineHeight: 1.15,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, section === 'Overview' ? 'Welcome back, Jordan' : section), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: '2px 0 0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, section === 'Overview' ? 'Your next adventure is just around the corner.' : 'Manage your ' + section.toLowerCase() + ' for upcoming trips.'))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: onToggleTheme,
          "aria-label": "Toggle theme",
          style: {
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-body)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: theme === 'dark' ? 'Sun' : 'Moon',
          size: 19
        })), /*#__PURE__*/React.createElement("button", {
          "aria-label": "Notifications",
          onClick: () => setSection('Updates'),
          style: {
            position: 'relative',
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-body)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Bell",
          size: 19
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: 8,
            insetInlineEnd: 9,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--clay-400)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            paddingInlineStart: 6,
            borderInlineStart: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: "Jordan Rivera",
          src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&q=70&auto=format&fit=crop",
          size: "md"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--text-strong)',
            whiteSpace: 'nowrap'
          }
        }, "Jordan Rivera"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: 'var(--text-muted)'
          }
        }, "Gold traveler"))))), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            overflowY: 'auto',
            minWidth: 0,
            padding: '24px 28px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }
        }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NextTripHero, null), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }
        }, [['Luggage', '2', 'Upcoming trips', 'pine'], ['FileText', docComplete + '/4', 'Documents ready', 'marigold'], ['Award', '14', 'Countries visited', 'success']].map(([ic, v, l, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 46,
            height: 46,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 22,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 26,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, l))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Latest updates",
          action: /*#__PURE__*/React.createElement("button", {
            onClick: () => setSection('Updates'),
            style: {
              background: 'none',
              border: 'none',
              color: 'var(--text-link)',
              fontWeight: 600,
              fontSize: 13.5,
              cursor: 'pointer'
            }
          }, "See all")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, updates.slice(0, 3).map((u, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 36,
            height: 36,
            borderRadius: 'var(--radius-md)',
            background: `var(--${u[1]}-50)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: u[0],
          size: 18,
          color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, u[2]), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, u[4])))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Documents",
          action: /*#__PURE__*/React.createElement("button", {
            onClick: () => setSection('Documents'),
            style: {
              background: 'none',
              border: 'none',
              color: 'var(--text-link)',
              fontWeight: 600,
              fontSize: 13.5,
              cursor: 'pointer'
            }
          }, "Manage")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, docs.map((d, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '9px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: d.name ? 'FileCheck' : 'FilePlus',
          size: 17,
          color: d.name ? 'var(--color-primary)' : 'var(--text-muted)'
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, d.type), /*#__PURE__*/React.createElement(Badge, {
          tone: d.tone
        }, d.status)))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Get ready for Kyoto",
          action: /*#__PURE__*/React.createElement("span", {
            style: {
              fontSize: 13,
              color: 'var(--text-muted)'
            }
          }, "3 of 6 done")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Booking confirmed', true], ['Passport uploaded', true], ['Travel insurance added', true], ['Visa documents', false], ['Pre-trip questionnaire', false], ['Join the group chat', false]].map(([label, done], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 24,
            height: 24,
            borderRadius: '50%',
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: done ? 'var(--success-50)' : 'var(--surface-sunk)',
            border: done ? 'none' : '1.5px solid var(--border-default)'
          }
        }, done && /*#__PURE__*/React.createElement(Icon, {
          name: "Check",
          size: 14,
          color: "var(--success-500)",
          strokeWidth: 3
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14.5,
            color: done ? 'var(--text-muted)' : 'var(--text-strong)',
            textDecoration: done ? 'line-through' : 'none'
          }
        }, label), !done && /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "ghost",
          onClick: () => {}
        }, "Do it"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: 0
          }
        }, "Recommended for you"), /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('services'),
          style: {
            background: 'none',
            border: 'none',
            color: 'var(--text-link)',
            fontWeight: 600,
            fontSize: 13.5,
            cursor: 'pointer'
          }
        }, "Browse all")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }
        }, trips.filter(t => t.id !== next.id).slice(0, 3).map(t => /*#__PURE__*/React.createElement(TripCard, {
          key: t.id,
          image: t.image,
          title: t.title,
          location: t.location,
          badge: t.badge,
          badgeTone: t.badgeTone,
          rating: t.rating,
          reviews: t.reviews,
          duration: t.duration,
          price: t.price,
          onClick: () => onOpenTrip(t.id)
        }))))), section === 'My trips' && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16
          }
        }, [['Plane', '14', 'Trips taken'], ['Globe2', '11', 'Countries'], ['Moon', '92', 'Nights away'], ['Footprints', '1,240', 'Miles trekked']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 21,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 12
          }
        }, "Upcoming"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, bookings.filter(b => b.when === 'upcoming').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
          key: i,
          b: b
        })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 12
          }
        }, "Past trips"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, bookings.filter(b => b.when === 'past').map((b, i) => /*#__PURE__*/React.createElement(BookingCard, {
          key: i,
          b: b
        })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 12
          }
        }, "Saved for later"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }
        }, trips.filter(t => ['santorini', 'safari', 'norway'].includes(t.id)).map(t => /*#__PURE__*/React.createElement(TripCard, {
          key: t.id,
          image: t.image,
          title: t.title,
          location: t.location,
          badge: t.badge,
          badgeTone: t.badgeTone,
          rating: t.rating,
          reviews: t.reviews,
          duration: t.duration,
          price: t.price,
          saved: true,
          onClick: () => onOpenTrip(t.id)
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-xl)',
            minHeight: 200,
            display: 'flex',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=72&auto=format&fit=crop",
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(6,53,42,0.88), rgba(6,53,42,0.5))'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            padding: '32px 36px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 8px'
          }
        }, "Ready for your next adventure?"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 16,
            color: 'var(--stone-100)',
            margin: '0 0 20px',
            maxWidth: 440
          }
        }, "You've visited 11 countries with us. There are 30+ more waiting."), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('services')
        }, "Browse new trips")))), section === 'Itinerary' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            height: 180,
            display: 'flex',
            alignItems: 'flex-end'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: next.image,
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'var(--scrim-bottom)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 600,
            color: '#fff'
          }
        }, next.title), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--stone-100)'
          }
        }, next.location, " \xB7 ", next.duration, " \xB7 ", next.group)), /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "inverse",
          onClick: () => onOpenTrip(next.id)
        }, "View trip page"))), /*#__PURE__*/React.createElement(Panel, {
          title: `${next.title} · day by day`,
          action: /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "secondary",
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "Download",
              size: 15,
              color: "var(--color-primary)"
            })
          }, "Download PDF")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, next.itinerary.map(([h, p], i) => {
          const on = openDay === i;
          return /*#__PURE__*/React.createElement("div", {
            key: i,
            style: {
              borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
            }
          }, /*#__PURE__*/React.createElement("button", {
            onClick: () => setOpenDay(on ? -1 : i),
            style: {
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'start'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: on ? 'var(--color-primary)' : 'var(--surface-sunk)',
              color: on ? 'var(--text-on-primary)' : 'var(--text-body)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              flexShrink: 0
            }
          }, i + 1), /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1,
              fontWeight: 700,
              fontSize: 15.5,
              color: 'var(--text-strong)'
            }
          }, "Day ", i + 1, " \xB7 ", h), /*#__PURE__*/React.createElement(Icon, {
            name: on ? 'ChevronUp' : 'ChevronDown',
            size: 18,
            color: "var(--text-muted)"
          })), on && /*#__PURE__*/React.createElement("p", {
            style: {
              margin: '0 0 16px 48px',
              fontSize: 14.5,
              lineHeight: 1.6,
              color: 'var(--text-body)'
            }
          }, p));
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "What's included"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, ['Local expert guide throughout', 'All accommodation', 'Listed activities & fees', 'Most breakfasts & welcome dinner', 'Airport transfers'].map((l, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Check",
          size: 16,
          color: "var(--success-500)",
          strokeWidth: 2.5
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14.5,
            color: 'var(--text-body)'
          }
        }, l))))), /*#__PURE__*/React.createElement(Panel, {
          title: "What to pack"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10
          }
        }, ['Light layers', 'Rain shell', 'Walking shoes', 'Power adapter', 'Reusable bottle', 'Sun hat', 'Day pack', 'Camera'].map(t => /*#__PURE__*/React.createElement(Badge, {
          key: t,
          tone: "neutral"
        }, t))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Good to know"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Languages', 'Local language & currency', 'Japanese · Japanese yen (¥). English is limited outside cities.'], ['Plug', 'Power & connectivity', 'Type A/B sockets, 100V. Pocket Wi-Fi is provided for the group.'], ['HeartPulse', 'Health & safety', 'No vaccinations required. Your guide carries a first-aid kit throughout.'], ['Wallet', 'Spending money', 'Budget ~$40/day for lunches and extras. Cards widely accepted in Kyoto.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 14,
            padding: '14px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 19,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14.5,
            color: 'var(--text-strong)'
          }
        }, h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            lineHeight: 1.55,
            color: 'var(--text-body)',
            marginTop: 2
          }
        }, p))))))), section === 'Documents' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          onClick: () => pickFile('Passport'),
          style: {
            border: '2px dashed var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            background: 'var(--surface-card)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'var(--color-primary-soft)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "UploadCloud",
          size: 26,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, "Drop files here or click to upload"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13.5,
            color: 'var(--text-muted)',
            marginTop: 4
          }
        }, "PDF, JPG or PNG \xB7 up to 10MB each. Encrypted & private.")), /*#__PURE__*/React.createElement(Panel, {
          title: "Your travel documents"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 12
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, docComplete, " of ", docs.length, " complete"), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 160,
            height: 8,
            borderRadius: 4,
            background: 'var(--surface-sunk)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: `${docComplete / docs.length * 100}%`,
            height: '100%',
            background: 'var(--color-primary)'
          }
        }))), docs.map((d, i) => /*#__PURE__*/React.createElement(DocRow, {
          key: i,
          d: d
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Required for your trips"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, [['Temples & Tea of Kyoto', 'Passport · Japan visa', 'clay'], ['Land of Fire & Ice', 'Passport only', 'success']].map(([trip, req, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 14px',
            background: 'var(--surface-sunk)',
            borderRadius: 'var(--radius-md)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Luggage",
          size: 18,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, trip), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, req)), /*#__PURE__*/React.createElement(Badge, {
          tone: tone
        }, tone === 'clay' ? 'Action needed' : 'Ready'))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Recent activity"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Upload', 'Passport.pdf uploaded', '2 days ago'], ['ShieldCheck', 'Insurance received', '2 days ago'], ['Clock', 'Visa reminder sent', '4 days ago']].map(([ic, l, t], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 17,
          color: "var(--text-muted)"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, t)))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Need help with documents?"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Which documents do I need?', 'Requirements vary by destination — check each trip’s page, or your “Required for your trips” list above.'], ['Are my files secure?', 'Yes. All uploads are encrypted at rest and only visible to you and your trip coordinator.'], ['When are documents due?', 'Most are needed 30 days before departure; visa documents may be required earlier.']].map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            padding: '14px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14.5,
            color: 'var(--text-strong)',
            marginBottom: 4
          }
        }, q), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--text-body)'
          }
        }, a)))))), section === 'Updates' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
          title: "Trip updates & notifications"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, updates.map((u, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 14,
            padding: '16px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-md)',
            background: `var(--${u[1]}-50)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: u[0],
          size: 20,
          color: `var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 15.5,
            color: 'var(--text-strong)'
          }
        }, u[2]), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap'
          }
        }, u[4])), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 14.5,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: '4px 0 0'
          }
        }, u[3])))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Notification preferences"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Trip reminders & countdowns', true], ['Guide & itinerary changes', true], ['Document & visa alerts', true], ['Weather updates', false], ['Deals & new trips', false]].map(([label, on], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14.5,
            color: 'var(--text-strong)'
          }
        }, label), /*#__PURE__*/React.createElement("span", {
          style: {
            width: 42,
            height: 24,
            borderRadius: 'var(--radius-pill)',
            background: on ? 'var(--color-primary)' : 'var(--border-default)',
            position: 'relative',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: 3,
            insetInlineStart: on ? 21 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff'
          }
        }))))))), section === 'Profile' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Personal details"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, [['Full name', 'Jordan Rivera'], ['Email', 'jordan@email.com'], ['Phone', '+1 (555) 014 2277'], ['Nationality', 'United States'], ['Date of birth', 'Mar 12, 1991']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
            paddingBottom: i < 4 ? 12 : 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Travel preferences"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 18
          }
        }, ['Adventure', 'Culture', 'Food', 'Window seat', 'Vegetarian'].map(t => /*#__PURE__*/React.createElement(Badge, {
          key: t,
          tone: "pine"
        }, t))), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          size: "sm",
          fullWidth: true,
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Settings",
            size: 15,
            color: "var(--color-primary)"
          })
        }, "Edit preferences"))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--surface-inverse)',
            padding: '26px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--marigold-300)'
          }
        }, "Wayfarer rewards"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--stone-50)',
            margin: '6px 0 2px'
          }
        }, "Gold traveler"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--stone-200)'
          }
        }, "2,480 points \xB7 520 to Platinum")), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 220
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            height: 10,
            borderRadius: 5,
            background: 'rgba(255,255,255,0.18)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: '82%',
            height: '100%',
            background: 'var(--marigold-400)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--stone-200)',
            marginTop: 8,
            textAlign: 'end'
          }
        }, "82% to next tier"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Emergency contact"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, [['Name', 'Alex Rivera'], ['Relationship', 'Sibling'], ['Phone', '+1 (555) 660 1180']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none',
            paddingBottom: i < 2 ? 12 : 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Security"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, [['Lock', 'Password', 'Updated 3 months ago'], ['Smartphone', 'Two-factor auth', 'Enabled'], ['Mail', 'Login alerts', 'On']].map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 17,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, v)))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Travel history"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Amalfi Coast by Vespa', 'Italy', 'May 2025', '★ 5.0'], ['Cyclades Island Hopper', 'Greece', 'Sep 2024', '★ 4.8'], ['Atlas Mountains & Marrakech', 'Morocco', 'Apr 2024', '★ 4.9'], ['Vietnam: Hanoi to Halong', 'Vietnam', 'Nov 2023', '★ 4.7']].map(([trip, country, date, rating], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '13px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 38,
            height: 38,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "MapPin",
          size: 18,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 14.5,
            color: 'var(--text-strong)'
          }
        }, trip), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, country, " \xB7 ", date)), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            fontSize: 13,
            color: 'var(--marigold-600)',
            fontWeight: 600
          }
        }, rating))))))))));
      }
      window.ClientDashboardScreen = ClientDashboardScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/ClientDashboardScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/ContactScreen.jsx
  try {
    (() => {
      // Contact — 5 sections: header, contact+map+form, support channels, FAQ, global offices. window.ContactScreen.
      function ContactScreen() {
        const {
          Button,
          Input,
          Select,
          Badge
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const [form, setForm] = React.useState({
          name: '',
          email: '',
          topic: 'General enquiry',
          message: ''
        });
        const [errors, setErrors] = React.useState({});
        const [sent, setSent] = React.useState(false);
        const [faq, setFaq] = React.useState(0);
        const set = k => e => setForm({
          ...form,
          [k]: e.target.value
        });
        function submit(e) {
          e.preventDefault();
          const er = {};
          if (!form.name.trim()) er.name = 'Please tell us your name';
          if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
          if (form.message.trim().length < 10) er.message = 'A little more detail, please (10+ chars)';
          setErrors(er);
          if (Object.keys(er).length === 0) setSent(true);
        }
        const details = [['MapPin', 'Visit us', '24 Harbour Lane, Lisbon, Portugal'], ['Mail', 'Email', 'hello@wayfarer.travel'], ['Phone', 'Call', '+351 21 000 0000'], ['Clock', 'Hours', 'Mon–Sat · 9:00–18:00 WET']];
        const channels = [['MessageSquare', 'Live chat', 'Chat with our team', 'Mon–Sat, 9–18 WET'], ['LifeBuoy', 'Help center', 'Browse 200+ articles', 'Answers, anytime'], ['Plane', 'On-trip support', '24/7 while you travel', 'Every trip, included']];
        const faqs = [['How quickly will you reply?', 'We answer most messages within one business day — often much sooner during office hours.'], ['Can you help plan a custom trip?', 'Yes. Pick “Custom trip” above and tell us your dates and interests; a trip expert will design an itinerary with you.'], ['Do you offer group or private departures?', 'We do — private departures for groups of 6+ and tailored corporate retreats. Mention it in your message.']];
        const offices = [['Lisbon', 'HQ · Europe', 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=500&q=70&auto=format&fit=crop'], ['Kyoto', 'Asia desk', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=70&auto=format&fit=crop'], ['Santiago', 'Americas desk', 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=500&q=70&auto=format&fit=crop']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '40px 24px 16px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "We'd love to hear from you"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 0'
          }
        }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '28px 24px 64px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: 40,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 18,
            marginBottom: 24
          }
        }, details.map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 19,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)',
            fontSize: 15
          }
        }, v))))), /*#__PURE__*/React.createElement("div", {
          "data-map": "google",
          style: {
            position: 'relative',
            height: 260,
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--surface-sunk)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=900&q=70&auto=format&fit=crop",
          alt: "Map of Lisbon",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            background: 'var(--clay-400)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-lg)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            transform: 'rotate(45deg)',
            display: 'inline-flex'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "MapPin",
          size: 22,
          color: "#fff"
        })))), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            bottom: 10,
            right: 10,
            fontSize: 11,
            color: 'var(--text-muted)',
            background: 'var(--surface-card)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-pill)'
          }
        }, "Google Maps placeholder"))), /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 30,
            boxShadow: 'var(--shadow-sm)'
          }
        }, sent ? /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            padding: '30px 0'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--success-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Check",
          size: 32,
          color: "var(--success-500)",
          strokeWidth: 2.5
        })), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 8px'
          }
        }, "Message sent!"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            color: 'var(--text-body)',
            margin: 0
          }
        }, "Thanks, ", form.name.split(' ')[0], ". We'll reply within one business day.")) : /*#__PURE__*/React.createElement("form", {
          onSubmit: submit,
          noValidate: true,
          "data-form": "formspree",
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Your name",
          value: form.name,
          onChange: set('name'),
          error: errors.name,
          placeholder: "Jordan Rivera"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Email",
          type: "email",
          value: form.email,
          onChange: set('email'),
          error: errors.email,
          placeholder: "you@email.com",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Mail",
            size: 18
          })
        }), /*#__PURE__*/React.createElement(Select, {
          label: "Topic",
          value: form.topic,
          onChange: set('topic'),
          options: ['General enquiry', 'Booking help', 'Custom trip', 'Press & partnerships']
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }
        }, /*#__PURE__*/React.createElement("label", {
          htmlFor: "wf-msg",
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, "Message"), /*#__PURE__*/React.createElement("textarea", {
          id: "wf-msg",
          value: form.message,
          onChange: set('message'),
          rows: 4,
          placeholder: "Tell us where you'd like to go\u2026",
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: 'var(--text-strong)',
            background: 'var(--surface-card)',
            border: `1.5px solid ${errors.message ? 'var(--error-500)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '12px 14px',
            resize: 'vertical',
            outline: 'none'
          }
        }), errors.message && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            color: 'var(--error-500)'
          }
        }, errors.message)), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "accent",
          size: "lg",
          fullWidth: true
        }, "Send message"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)',
            textAlign: 'center',
            margin: 0
          }
        }, "We'll never share your details. Powered by Formspree.")))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-card)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px',
            textAlign: 'center'
          }
        }, "More ways to reach us"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
          }
        }, channels.map(([ic, h, p, s], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-canvas)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 24,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 24,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontSize: 18,
            fontWeight: 700,
            color: 'var(--text-strong)',
            margin: '0 0 4px'
          }
        }, h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            color: 'var(--text-body)',
            margin: '0 0 6px'
          }
        }, p), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, s)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 760,
            margin: '0 auto',
            padding: '56px 24px 16px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px',
            textAlign: 'center'
          }
        }, "Before you write"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setFaq(faq === i ? -1 : i),
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '18px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'start',
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, q, /*#__PURE__*/React.createElement(Icon, {
          name: faq === i ? 'Minus' : 'Plus',
          size: 18,
          color: "var(--color-primary)"
        })), faq === i && /*#__PURE__*/React.createElement("p", {
          style: {
            padding: '0 20px 18px',
            margin: 0,
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)'
          }
        }, a))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 24px 72px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px',
            textAlign: 'center'
          }
        }, "Find us around the world"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
          }
        }, offices.map(([city, role, img], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '4 / 3'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: img,
          alt: city,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'var(--scrim-bottom)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            left: 16,
            bottom: 14
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            color: '#fff'
          }
        }, city), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            fontSize: 13,
            color: 'var(--stone-200)'
          }
        }, role)))))));
      }
      window.ContactScreen = ContactScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/ContactScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/DashboardScreen.jsx
  try {
    (() => {
      // Booking-management dashboard: sidebar, stats, bookings table, messages. window.DashboardScreen.
      function DashboardScreen({
        onNav,
        theme,
        onToggleTheme
      }) {
        const {
          Badge,
          Avatar,
          Button,
          Tag
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const [section, setSection] = React.useState('Overview');
        const [bookFilter, setBookFilter] = React.useState('All');
        const nav = [['Overview', 'LayoutDashboard'], ['Bookings', 'CalendarCheck'], ['Reports', 'BarChart3'], ['Travelers', 'Users'], ['Settings', 'Settings']];
        const stats = [['Upcoming trips', '6', 'CalendarCheck', 'pine'], ['New bookings', '24', 'TrendingUp', 'marigold'], ['Revenue (mo)', '$48.2k', 'Wallet', 'success'], ['Occupancy', '82%', 'Gauge', 'clay']];
        const bookings = [['WF-2K9X4', 'Jordan Rivera', 'Temples & Tea of Kyoto', 'Sep 14', 2, 'Confirmed', 'success'], ['WF-3L1Z8', 'Amira Haddad', 'Land of Fire & Ice', 'Sep 21', 4, 'Pending', 'warning'], ['WF-3M7Q2', 'Sam Okonkwo', 'Patagonia Wild Trek', 'Oct 5', 2, 'Confirmed', 'success'], ['WF-4P2R9', 'Lena Vogel', 'Atlas Mountains', 'Oct 12', 3, 'Cancelled', 'error'], ['WF-4T8W1', 'Diego Marín', 'Inca Trail', 'Nov 2', 2, 'Confirmed', 'success'], ['WF-5A2C6', 'Priya Nair', 'Serengeti Migration Safari', 'Nov 9', 2, 'Confirmed', 'success'], ['WF-5K8D3', 'Tom Becker', 'Cyclades Island Hopper', 'Nov 16', 5, 'Pending', 'warning'], ['WF-6B1F9', 'Yuki Tanaka', 'New Zealand South Island', 'Dec 1', 2, 'Confirmed', 'success']];
        const messages = [['Amira Haddad', 'Question about visa for Iceland trip', 'Hi! Do I need a visa as a UK citizen for the Iceland departure? Also, is the airport transfer included on arrival day?', '2h', true], ['Sam Okonkwo', 'Can I add a day in Santiago?', 'We\u2019d love to arrive a day early before the Patagonia trek. Can you help arrange the extra night and transfer?', '5h', true], ['Priya Nair', 'Dietary requirements', 'Just confirming you received my note about a nut allergy for the Serengeti trip. Thank you!', '1d', true], ['Lena Vogel', 'Thanks for the refund — all sorted!', 'Appreciate how quickly you handled the cancellation. We\u2019ll definitely book again next year.', '1d', false], ['Diego Marín', 'Packing list question', 'For the Inca Trail in November, would you recommend a 3-season or 4-season sleeping bag?', '2d', false]];
        const travelers = [['Jordan Rivera', 'jordan@email.com', 'United States', 14, 'Gold', 'success'], ['Amira Haddad', 'amira.h@email.com', 'United Kingdom', 6, 'Silver', 'neutral'], ['Sam Okonkwo', 'sam.ok@email.com', 'Nigeria', 9, 'Gold', 'success'], ['Priya Nair', 'priya.n@email.com', 'India', 4, 'Silver', 'neutral'], ['Diego Marín', 'diego.m@email.com', 'Spain', 11, 'Gold', 'success'], ['Yuki Tanaka', 'yuki.t@email.com', 'Japan', 3, 'Bronze', 'warning']];
        const shownBookings = bookFilter === 'All' ? bookings : bookings.filter(b => b[5] === bookFilter);
        const Panel = ({
          title,
          action,
          children
        }) => /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 22px',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: 'var(--text-strong)',
            margin: 0
          }
        }, title), action), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 22
          }
        }, children));
        const BookingsTable = ({
          rows
        }) => /*#__PURE__*/React.createElement("div", {
          style: {
            overflowX: 'auto'
          }
        }, /*#__PURE__*/React.createElement("table", {
          style: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 14
          }
        }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
          style: {
            textAlign: 'start',
            color: 'var(--text-muted)'
          }
        }, ['Ref', 'Traveler', 'Trip', 'Departs', 'Pax', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
          key: h,
          style: {
            textAlign: 'start',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            padding: '12px 4px'
          }
        }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((b, i) => /*#__PURE__*/React.createElement("tr", {
          key: i,
          style: {
            borderTop: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("td", {
          className: "u-mono",
          "data-ltr": true,
          style: {
            padding: '14px 4px',
            color: 'var(--text-muted)',
            fontSize: 13
          }
        }, b[0]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, b[1]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, b[2]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, b[3]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, b[4]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px'
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: b[6]
        }, b[5])))))));
        const RevenueChart = () => /*#__PURE__*/React.createElement(Panel, {
          title: "Revenue \xB7 last 8 months",
          action: /*#__PURE__*/React.createElement("span", {
            className: "u-mono",
            style: {
              fontSize: 13,
              color: 'var(--success-500)',
              fontWeight: 600
            }
          }, "\u25B2 18%")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: 12,
            height: 160
          }
        }, [['Feb', 38], ['Mar', 44], ['Apr', 41], ['May', 52], ['Jun', 60], ['Jul', 72], ['Aug', 66], ['Sep', 84]].map(([m, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: `${v * 1.6}px`,
            borderRadius: '6px 6px 0 0',
            background: i === 7 ? 'var(--color-accent)' : 'var(--color-primary)',
            opacity: i === 7 ? 1 : 0.55
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            color: 'var(--text-muted)'
          }
        }, m)))));
        const TasksPanel = () => /*#__PURE__*/React.createElement(Panel, {
          title: "Tasks"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Confirm guide for Inca Trail', 'Due today', 'clay'], ['Refund Lena Vogel', 'Due tomorrow', 'warning'], ['Approve 3 new reviews', 'This week', 'pine'], ['Update Iceland itinerary', 'This week', 'pine']].map(([t, due, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: '1.5px solid var(--border-strong)',
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, t), /*#__PURE__*/React.createElement(Badge, {
          tone: tone
        }, due)))));
        const DeparturesPanel = () => /*#__PURE__*/React.createElement(Panel, {
          title: "Upcoming departures"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, [['Temples & Tea of Kyoto', 'Sep 14', 8, 12], ['Land of Fire & Ice', 'Sep 21', 11, 14], ['Patagonia Wild Trek', 'Oct 5', 6, 10]].map(([trip, date, filled, cap], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-sm)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            fontSize: 15,
            fontWeight: 700,
            color: 'var(--color-primary)',
            lineHeight: 1
          }
        }, String(date).split(' ')[1]), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            color: 'var(--color-primary)',
            textTransform: 'uppercase'
          }
        }, String(date).split(' ')[0])), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, trip), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 6,
            borderRadius: 3,
            background: 'var(--surface-sunk)',
            marginTop: 6,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: `${filled / cap * 100}%`,
            height: '100%',
            background: 'var(--color-primary)'
          }
        }))), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap'
          }
        }, filled, "/", cap)))));
        const TopTripsPanel = () => /*#__PURE__*/React.createElement(Panel, {
          title: "Top-selling trips this month"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Temples & Tea of Kyoto', 'Japan', 42, '$77.3k'], ['Inca Trail to Machu Picchu', 'Peru', 38, '$75.2k'], ['Patagonia Wild Trek', 'Chile', 29, '$69.3k'], ['Serengeti Migration Safari', 'Tanzania', 18, '$62.1k']].map(([trip, country, sales, rev], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '13px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            fontSize: 15,
            fontWeight: 700,
            color: 'var(--text-muted)',
            width: 22
          }
        }, i + 1), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            fontSize: 14.5,
            color: 'var(--text-strong)'
          }
        }, trip), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, country, " \xB7 ", sales, " bookings")), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 140,
            height: 8,
            borderRadius: 4,
            background: 'var(--surface-sunk)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: `${sales / 42 * 100}%`,
            height: '100%',
            background: 'var(--color-primary)'
          }
        })), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          "data-ltr": true,
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)',
            width: 64,
            textAlign: 'end'
          }
        }, rev)))));
        const StatsRow = () => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16
          }
        }, stats.map(([l, v, ic, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement(Badge, {
          tone: tone,
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 13,
            color: `var(--${tone === 'pine' ? 'pine-700' : tone === 'marigold' ? 'marigold-600' : tone === 'success' ? 'success-500' : 'clay-500'})`
          })
        }, " ")), /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v))));
        const isNarrow = window.useMediaQuery('(max-width: 900px)');
        const [navOpen, setNavOpen] = React.useState(false);
        React.useEffect(() => {
          setNavOpen(false);
        }, [section]);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)',
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr',
            overflow: 'hidden'
          }
        }, isNarrow && navOpen && /*#__PURE__*/React.createElement("div", {
          onClick: () => setNavOpen(false),
          style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 79
          }
        }), /*#__PURE__*/React.createElement("aside", {
          style: isNarrow ? {
            position: 'fixed',
            top: 0,
            insetInlineStart: 0,
            width: 280,
            height: '100vh',
            zIndex: 80,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--surface-card)',
            borderInlineEnd: '1px solid var(--border-subtle)',
            padding: 16,
            transform: navOpen ? 'translateX(0)' : 'translateX(-110%)',
            transition: 'transform var(--dur-base) var(--ease-out)',
            boxShadow: navOpen ? 'var(--shadow-xl)' : 'none'
          } : {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--surface-card)',
            borderInlineEnd: '1px solid var(--border-subtle)',
            padding: 16
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            padding: '6px 8px 18px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WF_LOGO,
          width: "34",
          height: "34",
          alt: ""
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)'
          }
        }, "Wayfarer")), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '0 10px 10px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }
        }, "Manage"), /*#__PURE__*/React.createElement("nav", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }
        }, nav.map(([label, ic]) => {
          const on = section === label;
          return /*#__PURE__*/React.createElement("button", {
            key: label,
            onClick: () => setSection(label),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              padding: '11px 12px',
              minHeight: 44,
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              background: on ? 'var(--color-primary-soft)' : 'transparent',
              color: on ? 'var(--color-primary)' : 'var(--text-body)',
              fontWeight: on ? 700 : 500,
              fontSize: 15,
              textAlign: 'start'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 19,
            color: on ? 'var(--color-primary)' : 'var(--text-muted)'
          }), label);
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 'auto',
            paddingTop: 12
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            padding: '11px 12px',
            minHeight: 44,
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: 'pointer',
            background: 'transparent',
            color: 'var(--text-body)',
            fontSize: 15,
            width: '100%',
            textAlign: 'start'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "LogOut",
          size: 19,
          color: "var(--text-muted)"
        }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '16px 28px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--surface-card)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flex: 1,
            minWidth: 0
          }
        }, isNarrow && /*#__PURE__*/React.createElement("button", {
          onClick: () => setNavOpen(true),
          "aria-label": "Menu",
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-strong)',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Menu",
          size: 22
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            lineHeight: 1.15,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, section), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: '2px 0 0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, "Welcome back, Mara \u2014 here's what's happening."))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: onToggleTheme,
          "aria-label": "Toggle theme",
          style: {
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-body)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: theme === 'dark' ? 'Sun' : 'Moon',
          size: 19
        })), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "sm",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Plus",
            size: 16,
            color: "#fff"
          })
        }, "New booking"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            paddingInlineStart: 8,
            borderInlineStart: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: "Mara Okafor",
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop",
          size: "md"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--text-strong)',
            whiteSpace: 'nowrap'
          }
        }, "Mara Okafor"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: 'var(--text-muted)'
          }
        }, "Admin"))))), /*#__PURE__*/React.createElement("main", {
          style: {
            flex: 1,
            overflowY: 'auto',
            padding: '24px 28px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, section === 'Overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement(Panel, {
          title: "Recent bookings",
          action: /*#__PURE__*/React.createElement("button", {
            onClick: () => setSection('Bookings'),
            style: {
              background: 'none',
              border: 'none',
              color: 'var(--text-link)',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer'
            }
          }, "View all")
        }, /*#__PURE__*/React.createElement(BookingsTable, {
          rows: bookings.slice(0, 5)
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(DeparturesPanel, null), /*#__PURE__*/React.createElement(Panel, {
          title: "Bookings by region"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 13.5,
            marginBottom: 5
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, region), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            color: 'var(--text-muted)'
          }
        }, pct, "%")), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 8,
            borderRadius: 4,
            background: 'var(--surface-sunk)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: pct + '%',
            height: '100%',
            background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
          }
        }))))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement(TasksPanel, null)), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Bookings' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatsRow, null), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap'
          }
        }, ['All', 'Confirmed', 'Pending', 'Cancelled'].map(f => /*#__PURE__*/React.createElement(Tag, {
          key: f,
          selected: bookFilter === f,
          onClick: () => setBookFilter(f)
        }, f)), /*#__PURE__*/React.createElement("div", {
          style: {
            marginInlineStart: 'auto'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "primary",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Plus",
            size: 15,
            color: "#fff"
          })
        }, "New booking"))), /*#__PURE__*/React.createElement(Panel, {
          title: `All bookings · ${shownBookings.length}`
        }, /*#__PURE__*/React.createElement(BookingsTable, {
          rows: shownBookings
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }
        }, [['Confirmed', '5', 'success', 'CircleCheck'], ['Pending', '2', 'warning', 'Clock'], ['Cancelled', '1', 'error', 'CircleX']].map(([l, v, tone, ic], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            background: `var(--${tone}-50)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 21,
          color: `var(--${tone}-500)`
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, l)))))), section === 'Reports' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16
          }
        }, [['DollarSign', '$412k', 'Revenue YTD'], ['TrendingUp', '+18%', 'vs last year'], ['Receipt', '$1,920', 'Avg. booking'], ['Star', '4.9', 'Avg. rating']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 21,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, l))))), /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Bookings by region"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, [['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => /*#__PURE__*/React.createElement("div", {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 13.5,
            marginBottom: 5
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, region), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            color: 'var(--text-muted)'
          }
        }, pct, "%")), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 8,
            borderRadius: 4,
            background: 'var(--surface-sunk)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: pct + '%',
            height: '100%',
            background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})`
          }
        })))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Booking channels"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Website', '$248k', 60], ['Referral', '$103k', 25], ['Partners', '$41k', 10], ['Repeat guests', '$20k', 5]].map(([ch, rev, pct], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, ch), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, pct, "%"), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          "data-ltr": true,
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)',
            width: 56,
            textAlign: 'end'
          }
        }, rev)))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Travelers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16
          }
        }, [['Users', '1,284', 'Total travelers'], ['UserPlus', '38', 'New this month'], ['Award', '312', 'Gold members'], ['Repeat', '46%', 'Repeat rate']].map(([ic, v, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 21,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12.5,
            color: 'var(--text-muted)'
          }
        }, l))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Travelers",
          action: /*#__PURE__*/React.createElement("button", {
            style: {
              background: 'none',
              border: 'none',
              color: 'var(--text-link)',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer'
            }
          }, "Export CSV")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            overflowX: 'auto'
          }
        }, /*#__PURE__*/React.createElement("table", {
          style: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 14
          }
        }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Name', 'Email', 'Country', 'Trips', 'Tier'].map(h => /*#__PURE__*/React.createElement("th", {
          key: h,
          style: {
            textAlign: 'start',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            padding: '12px 4px'
          }
        }, h)))), /*#__PURE__*/React.createElement("tbody", null, travelers.map((t, i) => /*#__PURE__*/React.createElement("tr", {
          key: i,
          style: {
            borderTop: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: t[0],
          size: "sm"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, t[0]))), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, t[1]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, t[2]), /*#__PURE__*/React.createElement("td", {
          className: "u-mono",
          style: {
            padding: '14px 4px',
            color: 'var(--text-body)'
          }
        }, t[3]), /*#__PURE__*/React.createElement("td", {
          style: {
            padding: '14px 4px'
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: t[5]
        }, t[4])))))))), /*#__PURE__*/React.createElement(TopTripsPanel, null)), section === 'Settings' && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Panel, {
          title: "Company profile"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, [['Company', 'Wayfarer Travel Co.'], ['Support email', 'hello@wayfarer.travel'], ['Phone', '+351 21 000 0000'], ['Base currency', 'USD ($)'], ['Timezone', 'WET · Lisbon']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none',
            paddingBottom: i < 4 ? 12 : 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, v))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Booking settings"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Free cancellation window', '30 days'], ['Auto-confirm bookings', 'On'], ['Deposit required', 'No'], ['Max group size', '14 travelers'], ['Booking fee', '4%']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-muted)'
          }
        }, v))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Team"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['Mara Okafor', 'Owner'], ['Liam Chen', 'Trip manager'], ['Sofia Reyes', 'Support'], ['Diego Marín', 'Partnerships']].map(([n, role], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: n,
          size: "sm"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, n), /*#__PURE__*/React.createElement(Badge, {
          tone: "neutral"
        }, role))))), /*#__PURE__*/React.createElement(Panel, {
          title: "Notifications"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, [['New booking alerts', true], ['Cancellation alerts', true], ['Daily summary email', true], ['Low availability warnings', false], ['Marketing reports', false]].map(([l, on], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, l), /*#__PURE__*/React.createElement("span", {
          style: {
            width: 42,
            height: 24,
            borderRadius: 'var(--radius-pill)',
            background: on ? 'var(--color-primary)' : 'var(--border-default)',
            position: 'relative',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            top: 3,
            insetInlineStart: on ? 21 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff'
          }
        })))))))))));
      }
      window.DashboardScreen = DashboardScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/DashboardScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Footer.jsx
  try {
    (() => {
      // Site footer with newsletter signup + social. Exposes window.Footer.
      function Footer({
        onNav
      }) {
        const {
          Button,
          Input
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const cols = [['Explore', [['Home — Editorial', 'home2'], ['Book Now', 'book'], ['Services', 'services'], ['Gallery', 'gallery']]], ['Company', [['About', 'about'], ['Contact', 'contact'], ['Dashboard', 'dashboard']]], ['Support', [['Help center', 'contact'], ['Dashboard', 'dashboard'], ['Coming soon', 'soon'], ['404 page', '404']]]];
        return /*#__PURE__*/React.createElement("footer", {
          style: {
            background: 'var(--surface-inverse)',
            color: 'var(--stone-200)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            borderBottom: '1px solid rgba(255,255,255,0.12)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '36px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 28,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 600,
            color: 'var(--stone-50)'
          }
        }, "Get trip inspiration"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--stone-300)',
            marginTop: 4
          }
        }, "New journeys and seasonal offers, once a month. No spam.")), /*#__PURE__*/React.createElement("form", {
          onSubmit: e => e.preventDefault(),
          style: {
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            minWidth: 320
          },
          "data-newsletter": "mailchimp"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Input, {
          placeholder: "you@email.com",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Mail",
            size: 18
          })
        })), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          type: "submit",
          style: {
            height: 46,
            alignSelf: 'stretch'
          }
        }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px 32px',
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: 36
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WF_LOGO,
          width: "38",
          height: "38",
          alt: ""
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--stone-50)'
          }
        }, "Wayfarer")), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--stone-300)',
            maxWidth: 260,
            margin: '0 0 16px'
          }
        }, "Small-group adventures led by local guides, in 40+ countries. Go further."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10
          }
        }, [['Instagram', 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.95-11.4a1.58 1.58 0 1 1-1.58-1.58 1.58 1.58 0 0 1 1.58 1.58Z'], ['Facebook', 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z'], ['Twitter', 'M18.9 2.5h3.3l-7.2 8.24L23.5 21.5h-6.6l-5.18-6.77-5.92 6.77H2.5l7.7-8.8L1.5 2.5h6.77l4.68 6.19L18.9 2.5Zm-1.16 17h1.83L7.34 4.4H5.38L17.74 19.5Z'], ['Youtube', 'M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z']].map(([label, d]) => /*#__PURE__*/React.createElement("a", {
          key: label,
          href: "#",
          onClick: e => e.preventDefault(),
          "aria-label": label,
          style: {
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--stone-200)'
          }
        }, /*#__PURE__*/React.createElement("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true"
        }, /*#__PURE__*/React.createElement("path", {
          d: d
        })))))), cols.map(([head, items], i) => /*#__PURE__*/React.createElement("div", {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--marigold-300)',
            marginBottom: 16
          }
        }, head), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 11
          }
        }, items.map(([label, dest], j) => /*#__PURE__*/React.createElement("button", {
          key: j,
          onClick: () => onNav(dest),
          style: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'start',
            padding: 0,
            fontSize: 14,
            color: 'var(--stone-200)',
            fontFamily: 'var(--font-sans)'
          }
        }, label)))))), /*#__PURE__*/React.createElement("div", {
          style: {
            borderTop: '1px solid rgba(255,255,255,0.12)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
            fontSize: 13,
            color: 'var(--stone-400)'
          }
        }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Wayfarer Travel Co."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
      }
      window.Footer = Footer;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Footer.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/GalleryScreen.jsx
  try {
    (() => {
      // Gallery — 5 sections: intro+filter, masonry grid, stats band, share/Instagram, CTA (+ lightbox). window.GalleryScreen.
      function GalleryScreen({
        onNav
      }) {
        const {
          Tag,
          Button
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const photos = [{
          src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=70&auto=format&fit=crop',
          cat: 'Asia',
          cap: 'Kyoto, Japan'
        }, {
          src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=70&auto=format&fit=crop',
          cat: 'Americas',
          cap: 'Torres del Paine, Chile'
        }, {
          src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=70&auto=format&fit=crop',
          cat: 'Europe',
          cap: 'Reykjavík, Iceland'
        }, {
          src: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=70&auto=format&fit=crop',
          cat: 'Africa',
          cap: 'Marrakech, Morocco'
        }, {
          src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=70&auto=format&fit=crop',
          cat: 'Americas',
          cap: 'Machu Picchu, Peru'
        }, {
          src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=70&auto=format&fit=crop',
          cat: 'Asia',
          cap: 'Arashiyama bamboo'
        }, {
          src: 'https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=800&q=70&auto=format&fit=crop',
          cat: 'Americas',
          cap: 'Patagonian peaks'
        }, {
          src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=70&auto=format&fit=crop',
          cat: 'Europe',
          cap: 'Coastal road'
        }, {
          src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=70&auto=format&fit=crop',
          cat: 'Asia',
          cap: 'Lantern street'
        }];
        const cats = ['All', 'Asia', 'Europe', 'Americas', 'Africa'];
        const [cat, setCat] = React.useState('All');
        const [active, setActive] = React.useState(null);
        const shown = cat === 'All' ? photos : photos.filter(p => p.cat === cat);
        const insta = photos.slice(0, 6);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '40px 24px 0',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "From the road"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 10px'
          }
        }, "Gallery"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 17,
            color: 'var(--text-body)',
            maxWidth: 540,
            margin: '0 auto 22px',
            lineHeight: 1.6
          }
        }, "Real moments from real Wayfarer journeys \u2014 captured by our guides and travelers along the way."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 28
          }
        }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
          key: c,
          selected: cat === c,
          onClick: () => setCat(c)
        }, c)))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 24px 56px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            columnGap: 16,
            columnWidth: 280
          }
        }, shown.map((p, i) => /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: () => setActive(p),
          style: {
            display: 'block',
            width: '100%',
            border: 'none',
            padding: 0,
            marginBottom: 16,
            cursor: 'pointer',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            background: 'var(--surface-sunk)',
            breakInside: 'avoid',
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: p.src,
          alt: p.cap,
          loading: "lazy",
          style: {
            width: '100%',
            display: 'block',
            aspectRatio: i % 3 === 0 ? '3 / 4' : '4 / 3',
            objectFit: 'cover'
          }
        }))))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-inverse)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            textAlign: 'center'
          }
        }, [['250k+', 'Photos shared'], ['40+', 'Countries captured'], ['9,400', 'Travelers'], ['4.9', 'Avg. trip rating']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 40,
            fontWeight: 600,
            color: 'var(--marigold-300)'
          }
        }, n), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--stone-200)',
            marginTop: 4
          }
        }, l))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 24px 16px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            marginBottom: 24
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "Tag us"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '6px 0 0'
          }
        }, "#GoFurther on Instagram")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 12
          }
        }, insta.map((p, i) => /*#__PURE__*/React.createElement("a", {
          key: i,
          href: "#",
          onClick: e => {
            e.preventDefault();
            setActive(p);
          },
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            aspectRatio: '1',
            display: 'block'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: p.src,
          alt: p.cap,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(6,21,18,0.3)',
            opacity: 0,
            transition: 'opacity var(--dur-base)'
          },
          onMouseEnter: e => e.currentTarget.style.opacity = 1,
          onMouseLeave: e => e.currentTarget.style.opacity = 0
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Instagram",
          size: 22,
          color: "#fff"
        })))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px 72px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 40px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 12px'
          }
        }, "Make memories of your own"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 16,
            color: 'var(--text-body)',
            margin: '0 0 24px'
          }
        }, "Find a trip and start filling your own gallery."), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('services')
        }, "Browse trips"))), active && /*#__PURE__*/React.createElement("div", {
          onClick: () => setActive(null),
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(6,21,18,0.86)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setActive(null),
          "aria-label": "Close",
          style: {
            position: 'absolute',
            top: 22,
            right: 22,
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.14)',
            color: '#fff',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "X",
          size: 24,
          color: "#fff"
        })), /*#__PURE__*/React.createElement("figure", {
          style: {
            margin: 0,
            maxWidth: 900
          },
          onClick: e => e.stopPropagation()
        }, /*#__PURE__*/React.createElement("img", {
          src: active.src.replace('w=800', 'w=1400'),
          alt: active.cap,
          style: {
            width: '100%',
            maxHeight: '78vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-md)'
          }
        }), /*#__PURE__*/React.createElement("figcaption", {
          style: {
            color: 'var(--stone-100)',
            textAlign: 'center',
            marginTop: 14,
            fontFamily: 'var(--font-display)',
            fontSize: 18
          }
        }, active.cap))));
      }
      window.GalleryScreen = GalleryScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/GalleryScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Header.jsx
  try {
    (() => {
      // Shared site header: mandatory booking menu, mobile hamburger, theme + RTL toggles.
      // Exposes window.Header and window.useMediaQuery.
      function useMediaQuery(query) {
        const [match, setMatch] = React.useState(() => window.matchMedia(query).matches);
        React.useEffect(() => {
          const m = window.matchMedia(query);
          const fn = () => setMatch(m.matches);
          m.addEventListener('change', fn);
          fn();
          return () => m.removeEventListener('change', fn);
        }, [query]);
        return match;
      }
      window.useMediaQuery = useMediaQuery;

      // Mandatory menu structure for a Booking/Reservation template.
      // "Home" is rendered separately as a dropdown (Home 1 / Home 2).
      const WF_NAV = [['Services', 'services'], ['Gallery', 'gallery'], ['About', 'about'], ['Contact', 'contact']];
      const WF_HOMES = [['Home 1', 'home'], ['Home 2', 'home2']];
      const WF_DASH = [['Traveler', 'account'], ['Admin', 'dashboard']];

      // Animated "Dashboards" dropdown (mirrors HomeMenu), placed after Contact.
      function DashMenu({
        onNav,
        active,
        isMobile
      }) {
        const Icon = window.Icon;
        const [open, setOpen] = React.useState(false);
        const isDash = active === 'account' || active === 'dashboard';
        const closeT = React.useRef(null);
        const openNow = () => {
          clearTimeout(closeT.current);
          setOpen(true);
        };
        const closeSoon = () => {
          closeT.current = setTimeout(() => setOpen(false), 120);
        };
        if (isMobile) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column'
            }
          }, WF_DASH.map(([label, dest]) => /*#__PURE__*/React.createElement("button", {
            key: dest,
            onClick: () => onNav(dest),
            "aria-current": active === dest ? 'page' : undefined,
            style: {
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '14px 8px',
              minHeight: 44,
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: active === dest ? 700 : 500,
              color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
              textAlign: 'start'
            }
          }, label)));
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          },
          onMouseEnter: openNow,
          onMouseLeave: closeSoon
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setOpen(o => !o),
          "aria-haspopup": "true",
          "aria-expanded": open,
          "aria-current": isDash ? 'page' : undefined,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            background: open ? 'var(--surface-sunk)' : 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 13px',
            minHeight: 44,
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            fontWeight: isDash ? 700 : 500,
            color: isDash ? 'var(--color-primary)' : 'var(--text-body)'
          }
        }, "Dashboards ", /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronDown",
          size: 16,
          color: "currentColor",
          style: {
            transition: 'transform var(--dur-fast) var(--ease-out)',
            transform: open ? 'rotate(180deg)' : 'none'
          }
        })), /*#__PURE__*/React.createElement("div", {
          role: "menu",
          style: {
            position: 'absolute',
            top: 'calc(100% + 8px)',
            insetInlineEnd: 0,
            minWidth: 168,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            transformOrigin: 'top',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
            zIndex: 60
          }
        }, WF_DASH.map(([label, dest]) => {
          const on = active === dest;
          return /*#__PURE__*/React.createElement("button", {
            key: dest,
            role: "menuitem",
            onClick: () => {
              onNav(dest);
              setOpen(false);
            },
            style: {
              background: on ? 'var(--color-primary-soft)' : 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '11px 14px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'start',
              width: '100%',
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: on ? 700 : 500,
              color: on ? 'var(--color-primary)' : 'var(--text-body)'
            },
            onMouseEnter: e => {
              if (!on) e.currentTarget.style.background = 'var(--surface-sunk)';
            },
            onMouseLeave: e => {
              if (!on) e.currentTarget.style.background = 'none';
            }
          }, label);
        })));
      }

      // Animated "Home" dropdown used in the navbar on every page.
      function HomeMenu({
        onNav,
        active,
        isMobile
      }) {
        const Icon = window.Icon;
        const [open, setOpen] = React.useState(false);
        const isHome = active === 'home' || active === 'home2';
        const closeT = React.useRef(null);
        const openNow = () => {
          clearTimeout(closeT.current);
          setOpen(true);
        };
        const closeSoon = () => {
          closeT.current = setTimeout(() => setOpen(false), 120);
        };
        if (isMobile) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column'
            }
          }, WF_HOMES.map(([label, dest]) => /*#__PURE__*/React.createElement("button", {
            key: dest,
            onClick: () => onNav(dest),
            "aria-current": active === dest ? 'page' : undefined,
            style: {
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '14px 8px',
              minHeight: 44,
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: active === dest ? 700 : 500,
              color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
              textAlign: 'start'
            }
          }, label)));
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          },
          onMouseEnter: openNow,
          onMouseLeave: closeSoon
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setOpen(o => !o),
          "aria-haspopup": "true",
          "aria-expanded": open,
          "aria-current": isHome ? 'page' : undefined,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            background: open ? 'var(--surface-sunk)' : 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 13px',
            minHeight: 44,
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            fontWeight: isHome ? 700 : 500,
            color: isHome ? 'var(--color-primary)' : 'var(--text-body)'
          }
        }, "Home ", /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronDown",
          size: 16,
          color: "currentColor",
          style: {
            transition: 'transform var(--dur-fast) var(--ease-out)',
            transform: open ? 'rotate(180deg)' : 'none'
          }
        })), /*#__PURE__*/React.createElement("div", {
          role: "menu",
          style: {
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            minWidth: 168,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            transformOrigin: 'top',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
            zIndex: 60
          }
        }, WF_HOMES.map(([label, dest]) => {
          const on = active === dest;
          return /*#__PURE__*/React.createElement("button", {
            key: dest,
            role: "menuitem",
            onClick: () => {
              onNav(dest);
              setOpen(false);
            },
            style: {
              background: on ? 'var(--color-primary-soft)' : 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '11px 14px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'start',
              width: '100%',
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: on ? 700 : 500,
              color: on ? 'var(--color-primary)' : 'var(--text-body)'
            },
            onMouseEnter: e => {
              if (!on) e.currentTarget.style.background = 'var(--surface-sunk)';
            },
            onMouseLeave: e => {
              if (!on) e.currentTarget.style.background = 'none';
            }
          }, label);
        })));
      }
      function Header({
        onNav,
        active,
        theme,
        onToggleTheme,
        dir,
        onToggleDir
      }) {
        const {
          Button
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const isMobile = window.useMediaQuery('(max-width: 1023px)');
        const [open, setOpen] = React.useState(false);
        React.useEffect(() => {
          setOpen(false);
        }, [active]);
        const navBtn = (label, dest) => /*#__PURE__*/React.createElement("button", {
          key: dest + label,
          onClick: () => onNav(dest),
          "aria-current": active === dest ? 'page' : undefined,
          style: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: isMobile ? '14px 8px' : '10px 13px',
            minHeight: 44,
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            fontWeight: active === dest ? 700 : 500,
            color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
            textAlign: 'start',
            width: isMobile ? '100%' : 'auto'
          },
          onMouseEnter: e => {
            if (active !== dest) e.currentTarget.style.background = 'var(--surface-sunk)';
          },
          onMouseLeave: e => {
            e.currentTarget.style.background = 'none';
          }
        }, label);
        const toggles = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
          onClick: onToggleTheme,
          "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
          title: "Toggle theme",
          style: {
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-body)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: theme === 'dark' ? 'Sun' : 'Moon',
          size: 19
        })), /*#__PURE__*/React.createElement("button", {
          onClick: onToggleDir,
          "aria-label": "Toggle text direction",
          title: dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL (Arabic/Hebrew)',
          style: {
            height: 44,
            padding: '0 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            cursor: 'pointer',
            color: 'var(--text-body)',
            fontWeight: 700,
            fontSize: 13
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Languages",
          size: 18
        }), dir === 'rtl' ? 'RTL' : 'LTR'));
        const accountMenu = null;
        return /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'color-mix(in srgb, var(--surface-canvas) 86%, transparent)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 24px',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            gap: 22
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          "aria-label": "Wayfarer home",
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WF_LOGO,
          width: "38",
          height: "38",
          alt: ""
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)'
          }
        }, "Wayfarer")), !isMobile && /*#__PURE__*/React.createElement("nav", {
          "aria-label": "Primary",
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }
        }, /*#__PURE__*/React.createElement(HomeMenu, {
          onNav: onNav,
          active: active,
          isMobile: false
        }), WF_NAV.map(([l, d]) => navBtn(l, d)), /*#__PURE__*/React.createElement(DashMenu, {
          onNav: onNav,
          active: active,
          isMobile: false
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            marginInlineStart: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, !isMobile && toggles, !isMobile && /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "sm",
          onClick: () => onNav('book')
        }, "Book Now"), accountMenu, isMobile && /*#__PURE__*/React.createElement("button", {
          onClick: () => setOpen(o => !o),
          "aria-label": "Menu",
          "aria-expanded": open,
          style: {
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-strong)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: open ? 'X' : 'Menu',
          size: 22
        })))), isMobile && open && /*#__PURE__*/React.createElement("div", {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--surface-canvas)',
            padding: '10px 20px 18px'
          }
        }, /*#__PURE__*/React.createElement("nav", {
          "aria-label": "Primary mobile",
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement(HomeMenu, {
          onNav: onNav,
          active: active,
          isMobile: true
        }), WF_NAV.map(([l, d]) => navBtn(l, d))), /*#__PURE__*/React.createElement("div", {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 8,
            paddingTop: 12,
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            padding: '0 8px 4px'
          }
        }, "Dashboards"), /*#__PURE__*/React.createElement(DashMenu, {
          onNav: onNav,
          active: active,
          isMobile: true
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 12
          }
        }, toggles, /*#__PURE__*/React.createElement("div", {
          style: {
            marginInlineStart: 'auto'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "sm",
          onClick: () => onNav('book')
        }, "Book Now")))));
      }
      window.Header = Header;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Header.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/HomeScreen.jsx
  try {
    (() => {
      // Home screen — 7 sections: hero+search, value props, featured trips, destinations, how it works, testimonials, CTA. window.HomeScreen.
      function HomeScreen({
        onNav,
        onOpenTrip
      }) {
        const {
          Button,
          Tag,
          TripCard,
          Input,
          Select,
          Avatar,
          Rating
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const trips = window.WF_TRIPS;
        const reviews = window.WF_REVIEWS;
        const [cat, setCat] = React.useState('All');
        const cats = [['All', 'Compass'], ['Adventure', 'Mountain'], ['Culture', 'Landmark'], ['Beaches', 'Waves'], ['Food', 'UtensilsCrossed'], ['Wildlife', 'Bird']];
        const shown = (cat === 'All' ? trips : trips.filter(t => t.style.includes(cat))).slice(0, 6);
        const dests = [['Japan', '12 trips', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=70&auto=format&fit=crop'], ['Chile', '8 trips', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&auto=format&fit=crop'], ['Iceland', '6 trips', 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=70&auto=format&fit=crop'], ['Morocco', '9 trips', 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=70&auto=format&fit=crop'], ['Peru', '7 trips', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70&auto=format&fit=crop'], ['Italy', '11 trips', 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?w=600&q=70&auto=format&fit=crop']];
        const sectionHead = (eyebrow, title, action) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            marginBottom: 24
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, eyebrow), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 38,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 0'
          }
        }, title)), action);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            minHeight: 520,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=75&auto=format&fit=crop",
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(6,53,42,0.78) 0%, rgba(6,53,42,0.45) 55%, rgba(6,53,42,0.2) 100%)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 28px',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 620,
            padding: '32px 0 56px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--marigold-300)'
          }
        }, "40+ countries \xB7 Local guides"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 62,
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
            fontWeight: 600,
            color: '#fff',
            margin: '14px 0 0'
          }
        }, "Go further than", /*#__PURE__*/React.createElement("br", null), "the map."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 19,
            lineHeight: 1.6,
            color: 'var(--stone-100)',
            margin: '18px 0 0',
            maxWidth: 520
          }
        }, "Handcrafted small-group adventures, led by people who call these places home.")), /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            padding: 14,
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr auto',
            gap: 12,
            alignItems: 'end',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Where to?",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "MapPin",
            size: 18
          }),
          placeholder: "Search destinations"
        }), /*#__PURE__*/React.createElement(Select, {
          label: "When",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Calendar",
            size: 18
          }),
          options: ['Anytime', 'This summer', 'Autumn 2026', 'Winter 2026']
        }), /*#__PURE__*/React.createElement(Select, {
          label: "Travelers",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Users",
            size: 18
          }),
          options: ['2 adults', '2 adults · 1 child', 'Family (2+2)', 'Solo']
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('services'),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Search",
            size: 18,
            color: "var(--pine-900)"
          })
        }, "Search")))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-card)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24
          }
        }, [['Award', '4.9 / 5', 'from 9,400+ travelers'], ['Users', '12 max', 'small-group sizes'], ['MapPinned', '40+', 'countries, all guided'], ['ShieldCheck', 'Free', 'cancellation · 30 days']].map(([ic, big, sub], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 46,
            height: 46,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 22,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 18,
            color: 'var(--text-strong)'
          }
        }, big), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, sub)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 28px 16px'
          }
        }, sectionHead('Featured journeys', 'Trips travelers love right now', /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('services'),
          style: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-link)',
            fontWeight: 600,
            fontSize: 15,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, "View all ", /*#__PURE__*/React.createElement(Icon, {
          name: "ArrowRight",
          size: 16,
          color: "var(--color-primary)"
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 32
          }
        }, cats.map(([c, ic]) => /*#__PURE__*/React.createElement(Tag, {
          key: c,
          selected: cat === c,
          onClick: () => setCat(c),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 16,
            color: cat === c ? '#fff' : 'var(--text-muted)'
          })
        }, c))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24
          }
        }, shown.map(t => /*#__PURE__*/React.createElement(TripCard, {
          key: t.id,
          image: t.image,
          title: t.title,
          location: t.location,
          badge: t.badge,
          badgeTone: t.badgeTone,
          rating: t.rating,
          reviews: t.reviews,
          duration: t.duration,
          price: t.price,
          onClick: () => onOpenTrip(t.id)
        })))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 28px 16px'
          }
        }, sectionHead('Where to next', 'Popular destinations'), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 16
          }
        }, dests.map(([name, n, img], i) => /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: () => onNav('services'),
          style: {
            position: 'relative',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '3 / 4'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: img,
          alt: name,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'var(--scrim-bottom)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            left: 12,
            bottom: 10,
            textAlign: 'start'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 600,
            color: '#fff'
          }
        }, name), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            fontSize: 12,
            color: 'var(--stone-200)'
          }
        }, n)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '64px 28px 16px'
          }
        }, sectionHead('Simple by design', 'How Wayfarer works'), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24
          }
        }, [['Search', '01', 'Find your trip', 'Browse by destination, style, or season. Every itinerary is small-group and guide-led.', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop'], ['CalendarCheck', '02', 'Book in minutes', 'Pick a departure, add travelers, and reserve with no payment due today.', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&q=72&auto=format&fit=crop'], ['Plane', '03', 'Go further', 'Meet your local guide and a handful of fellow travelers — the rest is taken care of.', 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop'], ['Heart', '04', 'Come home changed', 'Return with new stories, new friends, and a fresh perspective — then start dreaming of the next one.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=72&auto=format&fit=crop']].map(([ic, n, h, p, img], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            position: 'relative',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            aspectRatio: '16 / 10',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: img,
          alt: h,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(6,53,42,0.55), rgba(6,53,42,0) 55%)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            position: 'absolute',
            top: 14,
            left: 16,
            fontSize: 15,
            fontWeight: 700,
            color: '#fff',
            background: 'rgba(6,53,42,0.55)',
            backdropFilter: 'blur(4px)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)'
          }
        }, "Step ", n)), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            padding: '36px 24px 26px',
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 24,
            top: -28,
            width: 56,
            height: 56,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            border: '3px solid var(--surface-card)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 26,
          color: "var(--pine-900)"
        })), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 8px'
          }
        }, h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, p)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '64px 28px 16px'
          }
        }, sectionHead('Traveler stories', 'Loved by people who go further'), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24
          }
        }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 24,
            boxShadow: 'var(--shadow-xs)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }
        }, /*#__PURE__*/React.createElement(Rating, {
          value: r.rating,
          size: "sm",
          showValue: false
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            lineHeight: 1.55,
            color: 'var(--text-strong)',
            margin: 0
          }
        }, "\u201C", r.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto'
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          src: r.photo,
          name: r.name,
          size: "md"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 15,
            color: 'var(--text-strong)'
          }
        }, r.name), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, r.date))))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '64px 28px 72px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            padding: '64px 48px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=72&auto=format&fit=crop",
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(6,53,42,0.78), rgba(6,53,42,0.9))'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: '0 0 14px'
          }
        }, "Your next adventure is waiting."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 18,
            color: 'var(--stone-100)',
            margin: '0 0 28px',
            maxWidth: 520,
            marginInline: 'auto'
          }
        }, "Join 9,400+ travelers who've gone further with a local guide by their side."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('services')
        }, "Browse all trips"), /*#__PURE__*/React.createElement(Button, {
          variant: "inverse",
          size: "lg",
          onClick: () => onNav('about')
        }, "Why Wayfarer"))))));
      }
      window.HomeScreen = HomeScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/HomeScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/HomeTwoScreen.jsx
  try {
    (() => {
      // Home v2 — editorial / magazine style, deliberately different from HomeScreen.
      // 7 sections: split hero, promise strip, editor's pick spotlight, region index,
      // journal stories, guide spotlight, newsletter. window.HomeTwoScreen.
      function HomeTwoScreen({
        onNav,
        onOpenTrip
      }) {
        const {
          Button,
          Badge,
          Rating,
          Avatar
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const trips = window.WF_TRIPS;
        const pick = trips.find(t => t.id === 'peru') || trips[0];
        const regionData = [{
          name: 'Asia',
          count: 4,
          blurb: 'Temple towns, street food, and mountain trails.',
          img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=72&auto=format&fit=crop'
        }, {
          name: 'Europe',
          count: 3,
          blurb: 'Fjords, coastlines, and old-world cities.',
          img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=72&auto=format&fit=crop'
        }, {
          name: 'Americas',
          count: 2,
          blurb: 'Andes peaks, patagonian wild, and ancient paths.',
          img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1000&q=72&auto=format&fit=crop'
        }, {
          name: 'Africa',
          count: 2,
          blurb: 'Migration plains, deserts, and souks.',
          img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=72&auto=format&fit=crop'
        }, {
          name: 'Oceania',
          count: 1,
          blurb: 'Glaciers, fjords, and Middle-earth roads.',
          img: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1000&q=72&auto=format&fit=crop'
        }];
        const [activeRegion, setActiveRegion] = React.useState(0);
        const journal = [{
          cat: 'Field notes',
          title: 'Why we cap every trip at twelve travelers',
          excerpt: 'The math of a great group trip is smaller than you think — here\u2019s what changes when the group shrinks.',
          read: '5 min',
          img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop'
        }, {
          cat: 'Destinations',
          title: 'A first-timer\u2019s guide to the Inca Trail',
          excerpt: 'Altitude, packing, and the dawn moment at the Sun Gate that makes every step worth it.',
          read: '8 min',
          img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=700&q=72&auto=format&fit=crop'
        }, {
          cat: 'Guides',
          title: 'Meet the people who lead the way',
          excerpt: 'From Kyoto to Patagonia, our guides share what travelers always get wrong — and right.',
          read: '6 min',
          img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop'
        }];
        const region = regionData[activeRegion];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '64px 28px 56px',
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 56,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "Wayfarer \xB7 est. 2014"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 72,
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '18px 0 0'
          }
        }, "The world,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
          style: {
            fontStyle: 'italic',
            color: 'var(--color-primary)'
          }
        }, "well\u2011guided.")), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 19,
            lineHeight: 1.65,
            color: 'var(--text-body)',
            margin: '24px 0 0',
            maxWidth: 460
          }
        }, "We design small-group journeys with the people who know each place best \u2014 then hand you the keys to a deeper kind of travel."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 14,
            marginTop: 30,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          onClick: () => onNav('services')
        }, "Explore journeys"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          size: "lg",
          onClick: () => onNav('about'),
          iconRight: /*#__PURE__*/React.createElement(Icon, {
            name: "ArrowRight",
            size: 18,
            color: "var(--color-primary)"
          })
        }, "Our story")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 40,
            marginTop: 44,
            paddingTop: 28,
            borderTop: '1px solid var(--border-subtle)'
          }
        }, [['40+', 'countries'], ['9.4k', 'travelers'], ['4.9★', 'avg. rating']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i
        }, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, n), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)',
            letterSpacing: '0.04em'
          }
        }, l))))), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            height: 540
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '74%',
            height: 360,
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=74&auto=format&fit=crop",
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '56%',
            height: 280,
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '5px solid var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=74&auto=format&fit=crop",
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 28,
            left: 8,
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 42,
            height: 42,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Compass",
          size: 22,
          color: "var(--pine-900)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, "Local guides"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: 'var(--text-muted)'
          }
        }, "in every destination"))))), /*#__PURE__*/React.createElement("section", {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--surface-card)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '40px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40
          }
        }, [['Rooted in place', 'Guides born and raised where they lead — not flown in for the season.'], ['Small by principle', 'Twelve travelers, maximum. Always. It changes everything about a trip.'], ['Care, end to end', 'Free cancellation, fair local pay, and 24/7 support while you travel.']].map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--clay-400)'
          }
        }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 21,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 6px'
          }
        }, h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, p)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '72px 28px 16px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 28
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "Editor's pick"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 0'
          }
        }, "This month, we're dreaming of Peru"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: 0,
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            minHeight: 440
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: pick.image,
          alt: pick.title,
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 18,
            left: 18
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: "marigold",
          variant: "solid"
        }, pick.badge || 'Featured'))), /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            padding: '40px 38px',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--text-muted)',
            fontSize: 15,
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "MapPin",
          size: 18,
          color: "var(--clay-400)"
        }), pick.location), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--text-strong)',
            margin: '0 0 12px'
          }
        }, pick.title), /*#__PURE__*/React.createElement(Rating, {
          value: pick.rating,
          reviews: pick.reviews
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 16,
            lineHeight: 1.7,
            color: 'var(--text-body)',
            margin: '16px 0 22px'
          }
        }, pick.summary), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 26
          }
        }, [['Clock', pick.duration], ['Users', pick.group], ['Activity', pick.level]].map(([ic, v], i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: 'var(--surface-sunk)',
            borderRadius: 'var(--radius-pill)',
            padding: '8px 14px',
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 15,
          color: "var(--color-primary)"
        }), v))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 5
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, "from"), /*#__PURE__*/React.createElement("span", {
          className: "u-mono",
          style: {
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, "$", pick.price), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, "/ person")), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onOpenTrip(pick.id)
        }, "View this trip"))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '72px 28px 16px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "Where we go"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 28px'
          }
        }, "Explore by region"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: 40,
            alignItems: 'stretch'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, regionData.map((r, i) => {
          const on = i === activeRegion;
          return /*#__PURE__*/React.createElement("button", {
            key: r.name,
            onMouseEnter: () => setActiveRegion(i),
            onClick: () => onNav('services'),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              textAlign: 'start',
              background: 'none',
              border: 'none',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)',
              padding: '22px 8px',
              cursor: 'pointer'
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "u-mono",
            style: {
              fontSize: 14,
              fontWeight: 700,
              color: on ? 'var(--clay-400)' : 'var(--text-muted)',
              width: 28
            }
          }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              fontWeight: 600,
              color: on ? 'var(--color-primary)' : 'var(--text-strong)',
              transition: 'color var(--dur-fast)'
            }
          }, r.name), on && /*#__PURE__*/React.createElement("div", {
            style: {
              fontSize: 14,
              color: 'var(--text-body)',
              marginTop: 2
            }
          }, r.blurb)), /*#__PURE__*/React.createElement("span", {
            style: {
              fontSize: 13,
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap'
            }
          }, r.count, " trips"), /*#__PURE__*/React.createElement(Icon, {
            name: "ArrowUpRight",
            size: 20,
            color: on ? 'var(--color-primary)' : 'var(--text-muted)'
          }));
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            minHeight: 420,
            boxShadow: 'var(--shadow-md)'
          }
        }, regionData.map((r, i) => /*#__PURE__*/React.createElement("img", {
          key: r.name,
          src: r.img,
          alt: r.name,
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === activeRegion ? 1 : 0,
            transition: 'opacity var(--dur-slow) var(--ease-out)'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'var(--scrim-bottom)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: 24,
            bottom: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: '#fff'
          }
        }, region.name), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--stone-100)'
          }
        }, region.count, " guided journeys"))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '72px 28px 16px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 28
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "The journal"), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 0'
          }
        }, "Stories from the road")), /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('about'),
          style: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-link)',
            fontWeight: 600,
            fontSize: 15,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, "All stories ", /*#__PURE__*/React.createElement(Icon, {
          name: "ArrowRight",
          size: 16,
          color: "var(--color-primary)"
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24
          }
        }, journal.map((j, i) => /*#__PURE__*/React.createElement("article", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xs)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          },
          onClick: () => onNav('about')
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            aspectRatio: '3 / 2',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: j.img,
          alt: j.title,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '20px 22px 24px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: "pine"
        }, j.cat), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, j.read, " read")), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 21,
            fontWeight: 600,
            lineHeight: 1.25,
            color: 'var(--text-strong)',
            margin: '0 0 8px'
          }
        }, j.title), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, j.excerpt), /*#__PURE__*/React.createElement("span", {
          style: {
            marginTop: 16,
            color: 'var(--text-link)',
            fontWeight: 600,
            fontSize: 14,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, "Read story ", /*#__PURE__*/React.createElement(Icon, {
          name: "ArrowRight",
          size: 15,
          color: "var(--color-primary)"
        }))))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '72px 28px 16px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--color-primary-soft)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 48px',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 36,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=72&auto=format&fit=crop",
          alt: "Mara Okafor",
          style: {
            width: 180,
            height: 220,
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)'
          }
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
          name: "Quote",
          size: 40,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            lineHeight: 1.5,
            fontWeight: 500,
            color: 'var(--text-strong)',
            margin: '8px 0 18px'
          }
        }, "A place tells you its story slowly. My job is to give you the time, and the company, to actually hear it."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, "Mara Okafor"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, "Founder & lead guide \xB7 9 years with Wayfarer")))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '72px 28px 80px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-inverse)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 48px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 42,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--stone-50)',
            margin: '0 0 12px'
          }
        }, "Travel notes, once a month."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 17,
            color: 'var(--stone-200)',
            margin: '0 auto 28px',
            maxWidth: 480
          }
        }, "New journeys, guide interviews, and the occasional well-timed deal. No noise."), /*#__PURE__*/React.createElement("form", {
          onSubmit: e => e.preventDefault(),
          style: {
            display: 'flex',
            gap: 10,
            maxWidth: 440,
            margin: '0 auto'
          }
        }, /*#__PURE__*/React.createElement("input", {
          placeholder: "you@email.com",
          style: {
            flex: 1,
            border: 'none',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            fontSize: 16,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            background: 'var(--surface-card)',
            color: 'var(--text-strong)'
          }
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          type: "submit"
        }, "Subscribe")))));
      }
      window.HomeTwoScreen = HomeTwoScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/HomeTwoScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/MiscScreens.jsx
  try {
    (() => {
      // 404 + Coming Soon pages. Exposes window.NotFoundScreen, window.ComingSoonScreen.
      function NotFoundScreen({
        onNav
      }) {
        const {
          Button
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const links = [['Compass', 'All trips', 'services'], ['Image', 'Gallery', 'gallery'], ['Info', 'About us', 'about'], ['Mail', 'Contact', 'contact']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            minHeight: 'calc(70vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '56px 40px 24px',
            position: 'relative',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            maxWidth: 520,
            position: 'relative',
            zIndex: 2
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: window.WF_LOGO,
          width: "56",
          height: "56",
          alt: "",
          style: {
            margin: '0 auto 24px'
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 96,
            fontWeight: 600,
            color: 'var(--color-primary)',
            lineHeight: 1,
            letterSpacing: '-0.04em'
          }
        }, "404"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 34,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '12px 0 10px'
          }
        }, "You've wandered off the map."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 17,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: '0 0 26px'
          }
        }, "The page you're looking for has packed up and moved on. Let's get you back to familiar trails."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          onClick: () => onNav('home'),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Home",
            size: 18,
            color: "#fff"
          })
        }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          size: "lg",
          onClick: () => onNav('services'),
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Compass",
            size: 18,
            color: "var(--color-primary)"
          })
        }, "Browse trips")))), /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 760,
            margin: '0 auto',
            padding: '0 24px 72px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 18
          }
        }, "Or try one of these"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 14
          }
        }, links.map(([ic, label, dest], i) => /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: () => onNav(dest),
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px 14px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xs)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 24,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--text-strong)'
          }
        }, label))))));
      }
      window.NotFoundScreen = NotFoundScreen;
      function ComingSoonScreen({
        onNav
      }) {
        const {
          Button,
          Input
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const [sent, setSent] = React.useState(false);
        // simple countdown to a fixed future date (demo)
        const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 42, []);
        const [now, setNow] = React.useState(Date.now());
        React.useEffect(() => {
          const id = setInterval(() => setNow(Date.now()), 1000);
          return () => clearInterval(id);
        }, []);
        const diff = Math.max(0, target - now);
        const d = Math.floor(diff / 86400000),
          h = Math.floor(diff / 3600000) % 24,
          m = Math.floor(diff / 60000) % 60,
          s = Math.floor(diff / 1000) % 60;
        const units = [[d, 'Days'], [h, 'Hours'], [m, 'Mins'], [s, 'Secs']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=75&auto=format&fit=crop",
          alt: "",
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(6,53,42,0.72), rgba(6,53,42,0.88))'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: '#fff',
            padding: 40,
            maxWidth: 640
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--marigold-300)'
          }
        }, "New for 2026"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            margin: '14px 0 12px'
          }
        }, "Antarctica is coming."), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 18,
            lineHeight: 1.6,
            color: 'var(--stone-100)',
            margin: '0 0 32px'
          }
        }, "Our most ambitious expedition yet. Join the waitlist to be first in line when bookings open."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            gap: 14,
            marginBottom: 32
          }
        }, units.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            minWidth: 78,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(6px)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 12px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "u-mono",
          style: {
            fontSize: 34,
            fontWeight: 600
          }
        }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: 'var(--stone-200)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }
        }, l)))), sent ? /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(255,255,255,0.14)',
            padding: '12px 20px',
            borderRadius: 'var(--radius-pill)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "Check",
          size: 20,
          color: "#fff"
        }), " You're on the list \u2014 see you down south.") : /*#__PURE__*/React.createElement("form", {
          onSubmit: e => {
            e.preventDefault();
            setSent(true);
          },
          style: {
            display: 'flex',
            gap: 10,
            maxWidth: 420,
            margin: '0 auto',
            alignItems: 'end'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement(Input, {
          placeholder: "you@email.com",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "Mail",
            size: 18
          })
        })), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          type: "submit"
        }, "Join waitlist")), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 28
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('home'),
          style: {
            background: 'none',
            border: 'none',
            color: 'var(--stone-200)',
            cursor: 'pointer',
            fontSize: 14,
            textDecoration: 'underline'
          }
        }, "Back to Wayfarer"))));
      }
      window.ComingSoonScreen = ComingSoonScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/MiscScreens.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/ServicesScreen.jsx
  try {
    (() => {
      // Services — 6 sections: hero, trip styles, listing (filters+grid+skeleton), why book, FAQ, CTA. window.ServicesScreen.
      function ServicesScreen({
        onOpenTrip,
        onNav
      }) {
        const {
          TripCard,
          Tag,
          Checkbox,
          Select,
          Button
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const trips = window.WF_TRIPS;
        const loading = window.useFakeLoad(800);
        const [region, setRegion] = React.useState('All');
        const [styles, setStyles] = React.useState({});
        const [difficulty, setDifficulty] = React.useState({});
        const [duration, setDuration] = React.useState({});
        const [price, setPrice] = React.useState({});
        const [extras, setExtras] = React.useState({});
        const [faq, setFaq] = React.useState(0);
        const [page, setPage] = React.useState(1);
        const perPage = 6;
        const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];
        const allStyles = ['Adventure', 'Culture', 'Food', 'Beaches', 'Wildlife'];
        const durationBuckets = [['Up to 5 days', d => d <= 5], ['6–8 days', d => d >= 6 && d <= 8], ['9+ days', d => d >= 9]];
        const priceBuckets = [['Under $1,500', p => p < 1500], ['$1,500–$2,500', p => p >= 1500 && p <= 2500], ['$2,500+', p => p > 2500]];
        const clearAll = () => {
          setStyles({});
          setDifficulty({});
          setDuration({});
          setPrice({});
          setExtras({});
        };
        const activeCount = [styles, difficulty, duration, price, extras].reduce((n, o) => n + Object.values(o).filter(Boolean).length, 0);
        const activeStyles = Object.keys(styles).filter(k => styles[k]);
        const parseDays = s => parseInt(String(s), 10) || 0;
        let shown = trips.filter(t => region === 'All' || t.region === region);
        if (activeStyles.length) shown = shown.filter(t => activeStyles.some(s => t.style.includes(s)));
        const activeDiff = Object.keys(difficulty).filter(k => difficulty[k]);
        if (activeDiff.length) shown = shown.filter(t => activeDiff.includes(t.level));
        const activeDur = durationBuckets.filter(([l]) => duration[l]);
        if (activeDur.length) shown = shown.filter(t => activeDur.some(([, fn]) => fn(parseDays(t.duration))));
        const activePrice = priceBuckets.filter(([l]) => price[l]);
        if (activePrice.length) shown = shown.filter(t => activePrice.some(([, fn]) => fn(t.price)));
        if (extras['Free cancellation']) {/* all trips qualify in this demo */}
        if (extras['Small group (≤10)']) shown = shown.filter(t => parseInt(t.group.replace(/\D/g, ''), 10) <= 10);
        const totalPages = Math.max(1, Math.ceil(shown.length / perPage));
        const curPage = Math.min(page, totalPages);
        const paged = shown.slice((curPage - 1) * perPage, curPage * perPage);
        // reset to page 1 whenever filters change
        React.useEffect(() => {
          setPage(1);
        }, [region, JSON.stringify(styles), JSON.stringify(difficulty), JSON.stringify(duration), JSON.stringify(price), JSON.stringify(extras)]);
        const tripStyles = [['Mountain', 'Adventure', 'Treks, climbs & wild trails'], ['Landmark', 'Culture', 'History, art & local life'], ['UtensilsCrossed', 'Food & wine', 'Markets, cooking & tastings'], ['Waves', 'Coast & islands', 'Beaches, sailing & sun'], ['Bird', 'Wildlife', 'Safari & nature up close'], ['Users', 'Family', 'Trips that work for all ages']];
        const faqs = [['How big are the groups?', 'Every Wayfarer trip is capped between 10 and 14 travelers, so you move easily and get real time with your guide.'], ['What\u2019s included in the price?', 'Accommodation, your local guide, listed activities, and most breakfasts. Flights and travel insurance are extra.'], ['Can I cancel?', 'Yes — free cancellation up to 30 days before departure, and no payment is due when you reserve.'], ['Are the trips suitable for solo travelers?', 'Absolutely. Around half of our travelers come solo; the small-group format makes it easy to connect.']];
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '34px 24px 24px'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--clay-400)'
          }
        }, "Our services"), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '6px 0 16px'
          }
        }, "Guided trips & experiences"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }
        }, regions.map(r => /*#__PURE__*/React.createElement(Tag, {
          key: r,
          selected: region === r,
          onClick: () => setRegion(r)
        }, r))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '40px 24px 8px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 18px'
          }
        }, "Browse by trip style"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16
          }
        }, tripStyles.map(([ic, h, p], i) => /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: () => onOpenTrip ? null : null,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            textAlign: 'start',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 18,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xs)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 46,
            height: 46,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 22,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, p)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '40px 24px',
            display: 'grid',
            gridTemplateColumns: '264px 1fr',
            gap: 32,
            alignItems: 'stretch'
          }
        }, /*#__PURE__*/React.createElement("aside", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xs)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '18px 22px',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "SlidersHorizontal",
          size: 18,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, "Filters"), activeCount > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--text-on-primary)',
            background: 'var(--color-primary)',
            borderRadius: 'var(--radius-pill)',
            minWidth: 20,
            height: 20,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 6px'
          }
        }, activeCount), activeCount > 0 && /*#__PURE__*/React.createElement("button", {
          onClick: clearAll,
          style: {
            marginInlineStart: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-link)',
            fontWeight: 600,
            fontSize: 13
          }
        }, "Clear all")), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            overflowY: 'auto',
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 22
          }
        }, (() => {
          const Group = ({
            title,
            items,
            state,
            setState,
            opts
          }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 12
            }
          }, title), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }
          }, (opts || items).map(s => {
            const label = Array.isArray(s) ? s[0] : s;
            return /*#__PURE__*/React.createElement(Checkbox, {
              key: label,
              label: label,
              checked: !!state[label],
              onChange: e => setState({
                ...state,
                [label]: e.target.checked
              })
            });
          })));
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Group, {
            title: "Trip style",
            items: allStyles,
            state: styles,
            setState: setStyles
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              borderTop: '1px solid var(--border-subtle)'
            }
          }), /*#__PURE__*/React.createElement(Group, {
            title: "Difficulty",
            items: ['Easy', 'Moderate', 'Challenging'],
            state: difficulty,
            setState: setDifficulty
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              borderTop: '1px solid var(--border-subtle)'
            }
          }), /*#__PURE__*/React.createElement(Group, {
            title: "Trip length",
            opts: durationBuckets,
            state: duration,
            setState: setDuration
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              borderTop: '1px solid var(--border-subtle)'
            }
          }), /*#__PURE__*/React.createElement(Group, {
            title: "Price per person",
            opts: priceBuckets,
            state: price,
            setState: setPrice
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              borderTop: '1px solid var(--border-subtle)'
            }
          }), /*#__PURE__*/React.createElement(Group, {
            title: "Extras",
            items: ['Free cancellation', 'Small group (\u226410)'],
            state: extras,
            setState: setExtras
          }));
        })())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-body)',
            fontSize: 15
          }
        }, loading ? 'Finding trips…' : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
          style: {
            color: 'var(--text-strong)'
          }
        }, shown.length), " trips found")), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 220
          }
        }, /*#__PURE__*/React.createElement(Select, {
          options: ['Sort: Recommended', 'Price: Low to high', 'Price: High to low', 'Rating']
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 22
          }
        }, loading ? [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(window.TripCardSkeleton, {
          key: i
        })) : paged.map(t => /*#__PURE__*/React.createElement(TripCard, {
          key: t.id,
          image: t.image,
          title: t.title,
          location: t.location,
          badge: t.badge,
          badgeTone: t.badgeTone,
          rating: t.rating,
          reviews: t.reviews,
          duration: t.duration,
          price: t.price,
          onClick: () => onOpenTrip(t.id)
        }))), !loading && totalPages > 1 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 36
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setPage(Math.max(1, curPage - 1)),
          disabled: curPage === 1,
          "aria-label": "Previous page",
          style: {
            minWidth: 44,
            height: 44,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            color: curPage === 1 ? 'var(--text-muted)' : 'var(--text-strong)',
            cursor: curPage === 1 ? 'not-allowed' : 'pointer',
            opacity: curPage === 1 ? 0.5 : 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 12px',
            fontWeight: 600,
            fontSize: 14,
            gap: 4
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronLeft",
          size: 16,
          color: "currentColor"
        }), "Prev"), Array.from({
          length: totalPages
        }).map((_, i) => {
          const n = i + 1;
          const on = n === curPage;
          return /*#__PURE__*/React.createElement("button", {
            key: n,
            onClick: () => setPage(n),
            "aria-current": on ? 'page' : undefined,
            style: {
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-sm)',
              border: on ? '1.5px solid var(--color-primary)' : '1px solid var(--border-default)',
              background: on ? 'var(--color-primary)' : 'var(--surface-card)',
              color: on ? 'var(--text-on-primary)' : 'var(--text-strong)',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 15,
              fontFamily: 'var(--font-mono)'
            }
          }, n);
        }), /*#__PURE__*/React.createElement("button", {
          onClick: () => setPage(Math.min(totalPages, curPage + 1)),
          disabled: curPage === totalPages,
          "aria-label": "Next page",
          style: {
            minWidth: 44,
            height: 44,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-card)',
            color: curPage === totalPages ? 'var(--text-muted)' : 'var(--text-strong)',
            cursor: curPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: curPage === totalPages ? 0.5 : 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 12px',
            fontWeight: 600,
            fontSize: 14,
            gap: 4
          }
        }, "Next", /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronRight",
          size: 16,
          color: "currentColor"
        }))))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-card)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '56px 24px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 24px',
            textAlign: 'center'
          }
        }, "Why book with Wayfarer"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24
          }
        }, [['Compass', 'Local guides', 'Led by people who live there.'], ['BadgeCheck', 'Handpicked stays', 'Characterful, locally owned.'], ['Wallet', 'No hidden fees', 'Clear pricing, reserve free.'], ['Headphones', '24/7 support', 'Real humans, on every trip.']].map(([ic, h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-soft)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 24,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: 'var(--text-strong)',
            margin: '0 0 6px'
          }
        }, h), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, p)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 760,
            margin: '0 auto',
            padding: '56px 24px 16px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 24px',
            textAlign: 'center'
          }
        }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => setFaq(faq === i ? -1 : i),
          style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '18px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'start',
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--text-strong)'
          }
        }, q, /*#__PURE__*/React.createElement(Icon, {
          name: faq === i ? 'Minus' : 'Plus',
          size: 18,
          color: "var(--color-primary)"
        })), faq === i && /*#__PURE__*/React.createElement("p", {
          style: {
            padding: '0 20px 18px',
            margin: 0,
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)'
          }
        }, a))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 24px 72px'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-inverse)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 40px',
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 34,
            fontWeight: 600,
            color: 'var(--stone-50)',
            margin: '0 0 14px'
          }
        }, "Not sure which trip is right?"), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 17,
            color: 'var(--stone-200)',
            margin: '0 0 26px'
          }
        }, "Tell us how you like to travel and we'll match you with a journey."), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          onClick: () => onNav('contact')
        }, "Talk to a trip expert"))));
      }
      window.ServicesScreen = ServicesScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/ServicesScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/TripScreen.jsx
  try {
    (() => {
      // Trip detail: gallery, tabs (Overview/Itinerary/Reviews), sticky booking card. window.TripScreen.
      function TripScreen({
        tripId,
        onBook,
        onNav,
        onOpenTrip
      }) {
        const {
          Button,
          Badge,
          Rating,
          Tabs,
          Avatar,
          TripCard
        } = window.DesignSystem_b5472a;
        const Icon = window.Icon;
        const t = window.WF_TRIPS.find(x => x.id === tripId) || window.WF_TRIPS[0];
        const reviews = window.WF_REVIEWS;
        const [tab, setTab] = React.useState('Overview');
        const gallery = [t.image, ...(t.gallery || [])].slice(0, 3);
        const facts = [['Clock', t.duration], ['Users', t.group], ['Activity', t.level], ['MapPin', t.region]];
        const isNarrow = window.useMediaQuery('(max-width: 900px)');
        const [slide, setSlide] = React.useState(0);
        React.useEffect(() => {
          setSlide(0);
        }, [tripId]);
        React.useEffect(() => {
          if (!isNarrow || gallery.length < 2) return;
          const id = setInterval(() => setSlide(s => (s + 1) % gallery.length), 3500);
          return () => clearInterval(id);
        }, [isNarrow, gallery.length]);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-canvas)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '20px 28px 0',
            fontSize: 14,
            color: 'var(--text-muted)',
            display: 'flex',
            gap: 8,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => onNav('services'),
          style: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: 14,
            padding: 0
          }
        }, "Trips"), /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronRight",
          size: 14,
          color: "var(--stone-400)"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-body)'
          }
        }, t.location)), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '16px 28px 0'
          }
        }, isNarrow ? /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            height: 280
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            height: '100%',
            transform: `translateX(-${slide * 100}%)`,
            transition: 'transform var(--dur-slow) var(--ease-out)'
          }
        }, gallery.map((src, i) => /*#__PURE__*/React.createElement("img", {
          key: i,
          src: src,
          alt: i === 0 ? t.title : '',
          style: {
            flex: '0 0 100%',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }))), gallery.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
          onClick: () => setSlide(s => (s - 1 + gallery.length) % gallery.length),
          "aria-label": "Previous photo",
          style: {
            position: 'absolute',
            insetInlineStart: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.9)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronLeft",
          size: 22,
          color: "var(--ink)"
        })), /*#__PURE__*/React.createElement("button", {
          onClick: () => setSlide(s => (s + 1) % gallery.length),
          "aria-label": "Next photo",
          style: {
            position: 'absolute',
            insetInlineEnd: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.9)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "ChevronRight",
          size: 22,
          color: "var(--ink)"
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 12,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 7
          }
        }, gallery.map((_, i) => /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: () => setSlide(i),
          "aria-label": `Photo ${i + 1}`,
          style: {
            width: i === slide ? 22 : 8,
            height: 8,
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            cursor: 'pointer',
            background: i === slide ? '#fff' : 'rgba(255,255,255,0.55)',
            transition: 'width var(--dur-base) var(--ease-out)'
          }
        }))))) : /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: gallery.length > 1 ? '2fr 1fr' : '1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 10,
            height: 420,
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: gallery[0],
          alt: t.title,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            gridRow: '1 / 3'
          }
        }), gallery[1] && /*#__PURE__*/React.createElement("img", {
          src: gallery[1],
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }), gallery[2] && /*#__PURE__*/React.createElement("img", {
          src: gallery[2],
          alt: "",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 40,
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 10,
            marginBottom: 14
          }
        }, t.badge && /*#__PURE__*/React.createElement(Badge, {
          tone: t.badgeTone,
          variant: "solid"
        }, t.badge), t.style.map(s => /*#__PURE__*/React.createElement(Badge, {
          key: s,
          tone: "neutral"
        }, s))), /*#__PURE__*/React.createElement("h1", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 44,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            margin: '0 0 12px'
          }
        }, t.title), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 28
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--text-body)',
            fontSize: 16
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "MapPin",
          size: 18,
          color: "var(--clay-400)"
        }), t.location), /*#__PURE__*/React.createElement(Rating, {
          value: t.rating,
          reviews: t.reviews
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 14,
            padding: '20px 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 28
          }
        }, facts.map(([ic, val], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-sm)',
            background: 'var(--color-primary-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 18,
          color: "var(--color-primary)"
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)',
            fontSize: 15
          }
        }, val)))), /*#__PURE__*/React.createElement(Tabs, {
          tabs: ['Overview', 'Itinerary', 'Reviews'],
          value: tab,
          onChange: setTab,
          style: {
            marginBottom: 24
          }
        }), tab === 'Overview' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 18,
            lineHeight: 1.7,
            color: 'var(--text-body)',
            margin: '0 0 20px'
          }
        }, t.summary), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 16,
            lineHeight: 1.7,
            color: 'var(--text-body)',
            margin: 0
          }
        }, "Your local guide handles the logistics, the introductions, and the little-known detours \\u2014 so all you have to do is be present. Group sizes are intentionally small, accommodations are characterful and locally owned, and there's always room in the schedule to wander.")), tab === 'Itinerary' && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column'
          }
        }, t.itinerary.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            gap: 18
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'var(--color-primary)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 14,
            flexShrink: 0,
            fontFamily: 'var(--font-mono)'
          }
        }, i + 1), i < t.itinerary.length - 1 && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 2,
            flex: 1,
            background: 'var(--border-default)',
            minHeight: 18
          }
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            paddingBottom: 22
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            fontSize: 17,
            color: 'var(--text-strong)',
            marginBottom: 3
          }
        }, "Day ", i + 1, " \xB7 ", h), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)'
          }
        }, p))))), tab === 'Reviews' && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }
        }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 20
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 10
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          src: r.photo,
          name: r.name,
          size: "md"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 700,
            color: 'var(--text-strong)',
            fontSize: 15
          }
        }, r.name), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, r.date)), /*#__PURE__*/React.createElement("div", {
          style: {
            marginLeft: 'auto'
          }
        }, /*#__PURE__*/React.createElement(Rating, {
          value: r.rating,
          size: "sm",
          showValue: false
        }))), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: 0
          }
        }, r.text))))), /*#__PURE__*/React.createElement("aside", {
          style: {
            position: 'sticky',
            top: 96
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 24,
            boxShadow: 'var(--shadow-lg)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
            marginBottom: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            color: 'var(--text-muted)'
          }
        }, "from"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 34,
            fontWeight: 600,
            color: 'var(--text-strong)'
          }
        }, "$", t.price), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 15,
            color: 'var(--text-muted)'
          }
        }, "/ person")), /*#__PURE__*/React.createElement("div", {
          style: {
            marginBottom: 18
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: "success"
        }, "Free cancellation up to 30 days")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 20
          }
        }, [['Calendar', 'Next departure', 'Sep 14, 2026'], ['Users', 'Availability', t.group.replace('Max', 'Up to') + ' \u00b7 4 left']].map(([ic, l, v], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 14px',
            background: 'var(--surface-sunk)',
            borderRadius: 'var(--radius-md)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: ic,
          size: 18,
          color: "var(--color-primary)"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: 'var(--text-muted)'
          }
        }, l), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            color: 'var(--text-strong)',
            fontSize: 14
          }
        }, v))))), /*#__PURE__*/React.createElement(Button, {
          variant: "accent",
          size: "lg",
          fullWidth: true,
          onClick: () => onBook(t.id)
        }, "Reserve your spot"), /*#__PURE__*/React.createElement("p", {
          style: {
            textAlign: 'center',
            fontSize: 13,
            color: 'var(--text-muted)',
            margin: '12px 0 0'
          }
        }, "No payment due today")))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-card)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 28px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px'
          }
        }, "What's included"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px 40px'
          }
        }, [['check', 'Local expert guide throughout'], ['check', 'All accommodation (locally owned)'], ['check', 'Listed activities & entrance fees'], ['check', 'Most breakfasts & welcome dinner'], ['x', 'International flights'], ['x', 'Travel insurance (add at checkout)']].map(([k, label], i) => /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 0'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 26,
            height: 26,
            borderRadius: '50%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: k === 'check' ? 'var(--success-50)' : 'var(--surface-sunk)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: k === 'check' ? 'Check' : 'X',
          size: 15,
          color: k === 'check' ? 'var(--success-500)' : 'var(--text-muted)',
          strokeWidth: 2.5
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 15,
            color: k === 'check' ? 'var(--text-body)' : 'var(--text-muted)'
          }
        }, label)))))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 28px 8px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px'
          }
        }, "Your guide"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: isNarrow ? 'column' : 'row',
            gap: 22,
            alignItems: isNarrow ? 'flex-start' : 'center',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 24,
            boxShadow: 'var(--shadow-xs)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=70&auto=format&fit=crop",
          alt: "Guide",
          style: {
            width: 96,
            height: 96,
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 4,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: 19,
            color: 'var(--text-strong)'
          }
        }, "Mara Okafor"), /*#__PURE__*/React.createElement(Badge, {
          tone: "pine"
        }, "Lead guide \xB7 9 yrs")), /*#__PURE__*/React.createElement(Rating, {
          value: 4.9,
          reviews: 210,
          size: "sm"
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: '10px 0 0',
            maxWidth: 560
          }
        }, "Born and raised in the region, Mara has led small groups here for nearly a decade. She knows the quiet corners, the best family-run kitchens, and exactly when to slow down.")))), /*#__PURE__*/React.createElement("section", {
          style: {
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '48px 28px 72px'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 30,
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 22px'
          }
        }, "You might also like"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24
          }
        }, window.WF_TRIPS.filter(x => x.id !== t.id).slice(0, 3).map(rt => /*#__PURE__*/React.createElement(TripCard, {
          key: rt.id,
          image: rt.image,
          title: rt.title,
          location: rt.location,
          badge: rt.badge,
          badgeTone: rt.badgeTone,
          rating: rt.rating,
          reviews: rt.reviews,
          duration: rt.duration,
          price: rt.price,
          onClick: () => onOpenTrip && onOpenTrip(rt.id)
        })))));
      }
      window.TripScreen = TripScreen;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/TripScreen.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/data.js
  try {
    (() => {
      // Wayfarer sample content — fictional tours used across the website UI kit.
      window.WF_TRIPS = [{
        id: 'kyoto',
        title: 'Temples & Tea of Kyoto',
        location: 'Kyoto, Japan',
        region: 'Asia',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=70&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=70&auto=format&fit=crop'],
        badge: 'Bestseller',
        badgeTone: 'marigold',
        rating: 4.9,
        reviews: 312,
        duration: '7 days',
        price: 1840,
        style: ['Culture', 'Food'],
        group: 'Max 12',
        level: 'Easy',
        summary: 'Wander lantern-lit alleys, sip matcha with a tea master, and sleep in a centuries-old ryokan on this slow, soulful week in Japan\u2019s old capital.',
        itinerary: [['Arrive in Kyoto', 'Meet your guide over a welcome kaiseki dinner in Gion.'], ['Fushimi Inari at dawn', 'Beat the crowds through a thousand vermilion gates.'], ['Arashiyama & bamboo', 'Bamboo grove, monkey park, and a riverside lunch.'], ['Tea ceremony', 'A private matcha ceremony with a fifth-generation master.'], ['Nara day trip', 'Giant Buddha, friendly deer, and ancient cedar forest.'], ['Free day in Kyoto', 'Explore at your pace \u2014 your guide has tips for every mood.'], ['Farewell', 'Morning market breakfast before transfers.']]
      }, {
        id: 'patagonia',
        title: 'Patagonia Wild Trek',
        location: 'Torres del Paine, Chile',
        region: 'Americas',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=70&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=600&q=70&auto=format&fit=crop', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=70&auto=format&fit=crop'],
        badge: '2 spots left',
        badgeTone: 'clay',
        rating: 4.8,
        reviews: 154,
        duration: '9 days',
        price: 2390,
        style: ['Adventure'],
        group: 'Max 10',
        level: 'Challenging',
        summary: 'Trek the legendary W circuit beneath granite spires, sleeping in cozy refugios and crossing glacial valleys with a seasoned mountain guide.',
        itinerary: [['Arrive Punta Arenas', 'Group dinner and trek briefing.'], ['Into the park', 'Transfer to Torres del Paine; first valley walk.'], ['Base of the Towers', 'The classic ascent to the granite towers.'], ['French Valley', 'Hanging glaciers and panoramic ridgelines.'], ['Grey Glacier', 'Walk the shore of a vast blue glacier.'], ['Rest & kayak', 'Optional paddle among icebergs.'], ['Patagonian estancia', 'Asado lunch with local gauchos.'], ['Reserve day', 'Weather buffer / free exploring.'], ['Departure', 'Transfer back to Punta Arenas.']]
      }, {
        id: 'morocco',
        title: 'Atlas Mountains & Marrakech',
        location: 'Marrakech, Morocco',
        region: 'Africa',
        image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'Small group',
        badgeTone: 'pine',
        rating: 4.7,
        reviews: 208,
        duration: '8 days',
        price: 1560,
        style: ['Culture', 'Adventure'],
        group: 'Max 12',
        level: 'Moderate',
        summary: 'From souk to summit \u2014 spice markets and rooftop riads give way to Berber villages and High Atlas trails.',
        itinerary: [['Marrakech medina', 'Souks, gardens, and a rooftop welcome.'], ['Into the Atlas', 'Drive to a mountain village guesthouse.'], ['Berber trails', 'Walk between villages with a local guide.'], ['Summit day', 'Optional ascent for sunrise views.'], ['Desert edge', 'Camel trek and a night under the stars.'], ['Essaouira coast', 'Atlantic breezes and grilled seafood.'], ['Free day', 'Hammam and last-minute haggling.'], ['Farewell', 'Transfer to the airport.']]
      }, {
        id: 'iceland',
        title: 'Land of Fire & Ice',
        location: 'Reykjav\u00edk, Iceland',
        region: 'Europe',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'New',
        badgeTone: 'pine',
        rating: 4.9,
        reviews: 96,
        duration: '6 days',
        price: 2120,
        style: ['Adventure'],
        group: 'Max 14',
        level: 'Easy',
        summary: 'Chase waterfalls, soak in geothermal lagoons, and hunt the northern lights along Iceland\u2019s south coast.',
        itinerary: [['Reykjav\u00edk', 'City walk and welcome dinner.'], ['Golden Circle', 'Geysers, Gullfoss, and tectonic rifts.'], ['South coast', 'Black sand beaches and glacier tongues.'], ['Glacier lagoon', 'Icebergs and Diamond Beach.'], ['Northern lights', 'Evening aurora chase.'], ['Blue Lagoon', 'Soak before departure.']]
      }, {
        id: 'amalfi',
        title: 'Amalfi Coast by Vespa',
        location: 'Amalfi, Italy',
        region: 'Europe',
        image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: null,
        badgeTone: 'pine',
        rating: 4.6,
        reviews: 271,
        duration: '5 days',
        price: 1290,
        style: ['Food', 'Culture'],
        group: 'Max 10',
        level: 'Easy',
        summary: 'Lemon groves, cliffside villages, and long lunches by the sea \u2014 the dolce vita at scooter pace.',
        itinerary: [['Sorrento', 'Pick up your Vespa and coastal orientation.'], ['Positano', 'Cliffs, beaches, and a seafood feast.'], ['Ravello gardens', 'Hilltop villas and views.'], ['Cooking day', 'Make pasta with a local nonna.'], ['Capri', 'Boat to the Blue Grotto and farewell.']]
      }, {
        id: 'peru',
        title: 'Inca Trail to Machu Picchu',
        location: 'Cusco, Peru',
        region: 'Americas',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'Bestseller',
        badgeTone: 'marigold',
        rating: 4.9,
        reviews: 488,
        duration: '8 days',
        price: 1980,
        style: ['Adventure', 'Culture'],
        group: 'Max 12',
        level: 'Challenging',
        summary: 'Acclimatize in Cusco, walk the ancient stone path over high passes, and arrive at the Sun Gate at dawn.',
        itinerary: [['Cusco', 'Acclimatize and explore the old town.'], ['Sacred Valley', 'Markets and Inca terraces.'], ['Trail day 1', 'Into the cloud forest.'], ['Dead Woman\u2019s Pass', 'The high point at 4,215m.'], ['Cloud forest', 'Ruins and orchids.'], ['Sun Gate', 'Dawn arrival at Machu Picchu.'], ['Machu Picchu', 'Full guided tour.'], ['Departure', 'Return to Cusco and fly out.']]
      }, {
        id: 'santorini',
        title: 'Cyclades Island Hopper',
        location: 'Santorini, Greece',
        region: 'Europe',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'Bestseller',
        badgeTone: 'marigold',
        rating: 4.8,
        reviews: 364,
        duration: '7 days',
        price: 1720,
        style: ['Beaches', 'Culture'],
        group: 'Max 12',
        level: 'Easy',
        summary: 'Whitewashed villages, caldera sunsets, and slow ferries between Santorini, Naxos, and Paros.',
        itinerary: [['Santorini', 'Caldera walk and a sunset in Oia.'], ['Naxos', 'Ferry over; mountain villages and beaches.'], ['Paros', 'Fishing harbors and sea kayaking.'], ['Island life', 'Cooking class and a winery visit.'], ['Free day', 'Beach time or boat trip.'], ['Delos', 'Ancient ruins by boat.'], ['Farewell', 'Last swim and transfers.']]
      }, {
        id: 'safari',
        title: 'Serengeti Migration Safari',
        location: 'Serengeti, Tanzania',
        region: 'Africa',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: '3 spots left',
        badgeTone: 'clay',
        rating: 4.9,
        reviews: 198,
        duration: '9 days',
        price: 3450,
        style: ['Wildlife', 'Adventure'],
        group: 'Max 8',
        level: 'Easy',
        summary: 'Track the great migration across endless plains, with sunrise game drives and nights under canvas.',
        itinerary: [['Arusha', 'Briefing and overnight lodge.'], ['Tarangire', 'Elephants and baobab country.'], ['Serengeti', 'First game drives on the plains.'], ['Migration', 'Follow the herds and river crossings.'], ['Ngorongoro', 'Crater floor full-day safari.'], ['Maasai village', 'Cultural visit and walking safari.'], ['Big cats', 'Dawn drive for lion and cheetah.'], ['Rest day', 'Camp and optional balloon ride.'], ['Departure', 'Fly out from Kilimanjaro.']]
      }, {
        id: 'vietnam',
        title: 'Vietnam: Hanoi to Halong',
        location: 'Hanoi, Vietnam',
        region: 'Asia',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'New',
        badgeTone: 'pine',
        rating: 4.7,
        reviews: 142,
        duration: '8 days',
        price: 1490,
        style: ['Culture', 'Food'],
        group: 'Max 12',
        level: 'Easy',
        summary: 'Street food in the old quarter, terraced rice fields, and an overnight cruise through Halong Bay.',
        itinerary: [['Hanoi', 'Old quarter food walk.'], ['Ninh Binh', 'Rowboats through limestone karsts.'], ['Sapa', 'Trek between hill-tribe villages.'], ['Homestay', 'Night with a local family.'], ['Halong Bay', 'Overnight cruise and kayaking.'], ['Hoi An', 'Lantern town and tailors.'], ['Cooking', 'Market tour and class.'], ['Departure', 'Fly home from Da Nang.']]
      }, {
        id: 'norway',
        title: 'Norwegian Fjords & Northern Lights',
        location: 'Troms\u00f8, Norway',
        region: 'Europe',
        image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: null,
        badgeTone: 'pine',
        rating: 4.8,
        reviews: 176,
        duration: '6 days',
        price: 2580,
        style: ['Adventure', 'Wildlife'],
        group: 'Max 10',
        level: 'Moderate',
        summary: 'Dog-sledding, fjord cruises, and aurora hunts above the Arctic Circle from a base in Troms\u00f8.',
        itinerary: [['Troms\u00f8', 'Arctic city and cable-car views.'], ['Fjord cruise', 'Silent electric boat among the peaks.'], ['Husky day', 'Dog-sledding across the tundra.'], ['Aurora night', 'Chase the northern lights.'], ['S\u00e1mi culture', 'Reindeer and traditional lavvu lunch.'], ['Departure', 'Morning at leisure, then home.']]
      }, {
        id: 'newzealand',
        title: 'New Zealand South Island',
        location: 'Queenstown, New Zealand',
        region: 'Oceania',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: 'Bestseller',
        badgeTone: 'marigold',
        rating: 4.9,
        reviews: 221,
        duration: '10 days',
        price: 2890,
        style: ['Adventure'],
        group: 'Max 12',
        level: 'Moderate',
        summary: 'Glaciers, fjords, and alpine lakes \u2014 a road trip through Middle-earth with hikes at every stop.',
        itinerary: [['Queenstown', 'Adventure capital welcome.'], ['Glenorchy', 'Lord of the Rings country.'], ['Wanaka', 'Lakeside and Roys Peak hike.'], ['Franz Josef', 'Glacier walk.'], ['Arthur\u2019s Pass', 'Alpine crossing.'], ['Aoraki', 'Mt Cook and stargazing.'], ['Te Anau', 'Gateway to the fjords.'], ['Milford Sound', 'Cruise the fjord.'], ['Catlins', 'Waterfalls and wildlife.'], ['Departure', 'Fly out from Dunedin.']]
      }, {
        id: 'jordan',
        title: 'Petra & Wadi Rum Desert',
        location: 'Petra, Jordan',
        region: 'Asia',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=70&auto=format&fit=crop',
        gallery: [],
        badge: '2 spots left',
        badgeTone: 'clay',
        rating: 4.8,
        reviews: 167,
        duration: '7 days',
        price: 1840,
        style: ['Culture', 'Adventure'],
        group: 'Max 12',
        level: 'Moderate',
        summary: 'Walk into the rose-red city of Petra, sleep in a desert camp, and float in the Dead Sea.',
        itinerary: [['Amman', 'Citadel and street food.'], ['Jerash', 'Roman ruins.'], ['Petra', 'The Treasury at dawn.'], ['Petra hikes', 'Monastery trail and high places.'], ['Wadi Rum', 'Jeep safari and desert camp.'], ['Dead Sea', 'Float and mud spa.'], ['Departure', 'Transfer to Amman.']]
      }];
      window.WF_REVIEWS = [{
        name: 'Mara Okafor',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop',
        rating: 5,
        date: 'May 2026',
        text: 'Our guide turned a great itinerary into the trip of a lifetime. Every detail was handled \u2014 we just had to show up and be amazed.'
      }, {
        name: 'Liam Chen',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70&auto=format&fit=crop',
        rating: 5,
        date: 'Apr 2026',
        text: 'Small group meant we actually got to know each other. Pacing was perfect \u2014 challenging but never rushed.'
      }, {
        name: 'Sofia Reyes',
        photo: null,
        rating: 4,
        date: 'Mar 2026',
        text: 'Beautiful trip and wonderful food. One travel day was long, but the views more than made up for it.'
      }, {
        name: 'Tom Becker',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=70&auto=format&fit=crop',
        rating: 5,
        date: 'Feb 2026',
        text: 'Every detail was handled so I could just be present. The small group felt like travelling with friends by day two.'
      }];
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/data.js",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/icons.jsx
  try {
    (() => {
      // Shared Lucide icon helper for the website UI kit. Exposes window.Icon.
      function Icon({
        name,
        size = 20,
        color = 'currentColor',
        strokeWidth = 2,
        style = {}
      }) {
        const ref = React.useRef(null);
        React.useEffect(() => {
          if (ref.current && window.lucide && lucide[name]) {
            const el = lucide.createElement(lucide[name]);
            el.setAttribute('width', size);
            el.setAttribute('height', size);
            el.setAttribute('stroke', color);
            el.setAttribute('stroke-width', strokeWidth);
            ref.current.innerHTML = el.outerHTML;
          }
        }, [name, size, color, strokeWidth]);
        return React.createElement('span', {
          ref,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            ...style
          }
        });
      }
      window.Icon = Icon;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/icons.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/util.jsx
  try {
    (() => {
      // Loading-state utilities for the UI kit. Exposes window.Skeleton, window.TripCardSkeleton, window.useFakeLoad.
      (function () {
        function useFakeLoad(ms) {
          const [loading, setLoading] = React.useState(true);
          React.useEffect(() => {
            const t = setTimeout(() => setLoading(false), ms || 850);
            return () => clearTimeout(t);
          }, []);
          return loading;
        }
        function Skeleton({
          w = '100%',
          h = 16,
          r = 'var(--radius-sm)',
          style = {}
        }) {
          return React.createElement('span', {
            'aria-hidden': true,
            style: {
              display: 'block',
              width: w,
              height: h,
              borderRadius: r,
              background: 'linear-gradient(90deg, var(--surface-sunk) 25%, var(--border-subtle) 37%, var(--surface-sunk) 63%)',
              backgroundSize: '400% 100%',
              animation: 'wf-shimmer 1.4s ease infinite',
              ...style
            }
          });
        }
        function TripCardSkeleton() {
          return React.createElement('div', {
            style: {
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden'
            }
          }, React.createElement(Skeleton, {
            h: 0,
            style: {
              aspectRatio: '4 / 3',
              height: 'auto',
              borderRadius: 0
            }
          }), React.createElement('div', {
            style: {
              padding: '16px 18px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }
          }, React.createElement(Skeleton, {
            w: '40%',
            h: 12
          }), React.createElement(Skeleton, {
            w: '80%',
            h: 20
          }), React.createElement(Skeleton, {
            w: '55%',
            h: 14
          }), React.createElement(Skeleton, {
            w: '35%',
            h: 22,
            style: {
              marginTop: 4
            }
          })));
        }
        // inject keyframes once
        if (!document.getElementById('wf-shimmer-kf')) {
          const s = document.createElement('style');
          s.id = 'wf-shimmer-kf';
          s.textContent = '@keyframes wf-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}';
          document.head.appendChild(s);
        }
        window.Skeleton = Skeleton;
        window.TripCardSkeleton = TripCardSkeleton;
        window.useFakeLoad = useFakeLoad;
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/util.jsx",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Badge = __ds_scope.Badge;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.IconButton = __ds_scope.IconButton;
  __ds_ns.Tag = __ds_scope.Tag;
  __ds_ns.Avatar = __ds_scope.Avatar;
  __ds_ns.Rating = __ds_scope.Rating;
  __ds_ns.Tabs = __ds_scope.Tabs;
  __ds_ns.TripCard = __ds_scope.TripCard;
  __ds_ns.Checkbox = __ds_scope.Checkbox;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.Select = __ds_scope.Select;
  __ds_ns.Switch = __ds_scope.Switch;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "wayfarer-template/assets/js/ds-bundle.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TripCard = __ds_scope.TripCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
