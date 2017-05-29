## Endless Revolution

### Background

Endless Revolution is an implementation of the popular 4-arrow rhythm game Dance Dance Revolution where players must press corresponding arrow keys as they scroll past a static outline of their respective shapes. The twist is that the gameplay doesn't end until the user misses too many consecutive arrows.

### Functionality & MVP

In the game, players will be able to:
- [ ] Press the arrow keys which correspond to the four gameplay controls (up, down, left, right)

Sidebar options:
- [ ] Choose a starting difficulty.
- [ ] Start, pause, and reset the game.
- [ ] Modify bomb frequency (arrows that when pressed penalize the player)
- [ ] Modify arrow speed / acceleration
- [ ] Mute music

This project will also include:
- [ ] An About modal describing the background and rules of the game
- [ ] Github / LinkedIn links

### Wireframes

This will be a single-page app with a gameplay screen and sidebar.

The main gameplay screen will have the outline of arrows at the top with a board of incoming arrows that scrolls continuously upwards.

On the right is a sidebar that will have buttons at the top to start, pause, and reset the game depending on the current context. Below will be sliders to mod current gameplay such as bomb frequency and arrow speed. Next down will be a dropdown of starting difficulties to choose from (only when the game is reset). Finally at the very bottom will be an audio mute button.

On the left is a score that increments upon successful presses and a life bar that ends the game when it becomes all red.

### Architecture and Technologies

### Implementation Timeline

### Bonus features

Some extra features I can include are:
- [ ] Multiplayer and versus AI modes
- [ ] File I/O for notechart and song import
- [ ] Input options for a dance pad
