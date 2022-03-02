"""
In MS-Paint, when we take the brush to a pixel and click,
the color of the region of that pixel is replaced with a
new selected color.

Following is the problem statement to do this task. 

Given a 2D screen, location of a pixel in the screen and a color,
replace color of the given pixel and all adjacent same colored pixels
with the given color.

Example: 

Input:
screen[M][N] = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
];
    
x = 4, y = 4, newColor = 3

The values in the given 2D screen indicate colors of the pixels.
x and y are coordinates of the brush, newColor is the color that
should replace the previous color on screen[x][y] and all surrounding
pixels with same color.

Output:
screen[M][N] = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 3, 3, 3, 3, 0, 1, 0],
    [1, 1, 1, 3, 3, 0, 1, 0],
    [1, 1, 1, 3, 3, 3, 3, 0],
    [1, 1, 1, 1, 1, 3, 1, 1],
    [1, 1, 1, 1, 1, 3, 3, 1],
];
"""


class Paint:
    def __init__(self, screen):
        self._screen = screen

    def flood_fill(self, pixel_x, pixel_y, new_colour):
        old_colour = self._screen[pixel_x][pixel_y]

        visited_pixels = []
        for i in range(len(self._screen) + 1):
            visited_pixels.append([0] * (len(self._screen[0]) + 1))

        def get_adjacent_pixels(x, y):
            return [
                (x + 1, y),
                (x - 1, y),
                (x, y + 1),
                (x, y - 1)
            ]

        adjacent_pixels = get_adjacent_pixels(pixel_x, pixel_y)

        self._screen[pixel_x][pixel_y] = new_colour
        while adjacent_pixels:
            for pixel in adjacent_pixels:
                if pixel[0] < 0 or pixel[1] < 0:
                    adjacent_pixels.remove(pixel)
                    continue

                if visited_pixels[pixel[0]][pixel[1]]:
                    adjacent_pixels.remove(pixel)
                    continue

                if self._screen[pixel[0]][pixel[1]] == old_colour:
                    self._screen[pixel[0]][pixel[1]] = new_colour
                    adjacent_pixels.extend(get_adjacent_pixels(pixel[0], pixel[1]))

                visited_pixels[pixel[0]][pixel[1]] = 1
                adjacent_pixels.remove(pixel)

    def print_screen(self):
        print(str().join(map(lambda row: f'{row}\n', self._screen)))


if __name__ == '__main__':
    # driver code
    paint = Paint([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 0],
        [1, 1, 2, 1, 0, 2, 0, 1],
        [2, 2, 2, 2, 1, 0, 0, 1],
        [0, 1, 0, 2, 0, 1, 0, 1],
        [0, 1, 0, 1, 1, 2, 0, 1],
        [2, 2, 1, 1, 0, 0, 1, 0],
    ])
    paint.print_screen()
    paint.flood_fill(3, 2, 5)
    paint.print_screen()
