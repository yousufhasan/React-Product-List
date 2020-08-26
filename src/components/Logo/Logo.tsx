import React from "react";

export const Logo = () => {
  return (
    <div className="logo">
        <a href="/">
            <picture data-testid="catch-logo">
                <source media="(max-width: 375px)" 
                    srcSet="https://s.catch.com.au/static/catch/images/logo-condensed-acc008b165.svg" 
                    type="image/svg+xml"/>
                    <img alt="Catch Product List" 
                     src="https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg" 
                    />
                </picture>
            </a>
    </div>
  );
}
