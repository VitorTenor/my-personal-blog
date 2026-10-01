# Hero typing effect

## Objective

Restore the original typing-and-erasing effect on the localized professional title in the home section without changing the existing layout, spacing, colors, typography, or responsive breakpoints.

## Behavior

- Animate the complete localized `hero.role` value after the `~/` prefix.
- Type the title, pause for two seconds, erase it, pause briefly, and repeat.
- Restart the animation with the correct text whenever the language changes.
- Keep the blinking cursor used by the original presentation.
- When `prefers-reduced-motion: reduce` is active, show the complete title statically and hide the animated cursor.

## Scope

Reuse the existing `AnimatedType` component and translation key. Do not add a second technical line or change any home-section dimensions or breakpoints.

## Validation

- Confirm the loop in English and Portuguese.
- Confirm the static reduced-motion fallback.
- Run the production build.
- Check the home section at 360, 768, and 1440 pixels for horizontal overflow.
