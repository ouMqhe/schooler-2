# graphs.py
from manim import *
import math

class AngleTypesDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-1, 7, 1],
            y_range=[-1, 5, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Right angle (90°)
        right_angle = Angle(Line(ORIGIN, RIGHT*2), Line(ORIGIN, UP*2), radius=0.5, color=RED)
        right_label = MathTex("90^\\circ", color=RED, font_size=24).next_to(right_angle, RIGHT)
        right_text = Text("Right Angle", font_size=20, color=RED).next_to(right_label, RIGHT)
        
        # Acute angle (<90°)
        acute_angle = Angle(Line(ORIGIN, RIGHT*2), Line(ORIGIN, UP*1.5), radius=0.5, color=GREEN)
        acute_label = MathTex("45^\\circ", color=GREEN, font_size=24).next_to(acute_angle, UP)
        acute_text = Text("Acute Angle", font_size=20, color=GREEN).next_to(acute_label, UP)
        
        # Obtuse angle (>90°)
        obtuse_angle = Angle(Line(ORIGIN, RIGHT*2), Line(ORIGIN, UP*0.5), radius=0.5, color=YELLOW)
        obtuse_label = MathTex("120^\\circ", color=YELLOW, font_size=24).next_to(obtuse_angle, DOWN)
        obtuse_text = Text("Obtuse Angle", font_size=20, color=YELLOW).next_to(obtuse_label, DOWN)
        
        # Position angles
        right_angle.shift(LEFT*3 + UP*2)
        acute_angle.shift(RIGHT*1 + UP*2)
        obtuse_angle.shift(RIGHT*3 + DOWN*1)
        
        self.play(Create(axes))
        self.play(Create(right_angle), Write(right_label), Write(right_text))
        self.play(Create(acute_angle), Write(acute_label), Write(acute_text))
        self.play(Create(obtuse_angle), Write(obtuse_label), Write(obtuse_text))
        self.wait(2)

class SimilarCongruentDemo(Scene):
    def construct(self):
        # Congruent triangles (same shape and size)
        triangle1 = Polygon([-3, 1, 0], [-2, -1, 0], [-1, 1, 0], color=RED)
        triangle2 = Polygon([0, 1, 0], [1, -1, 0], [2, 1, 0], color=RED)
        congruent_text = Text("Congruent", font_size=24, color=RED).next_to(triangle2, DOWN)
        
        # Similar triangles (same shape, different size)
        triangle3 = Polygon([-3, -2, 0], [-2, -3, 0], [-1, -2, 0], color=GREEN)
        triangle4 = Polygon([0, -1, 0], [1, -2, 0], [2, -1, 0], color=GREEN)
        triangle4.scale(1.5).shift(RIGHT*1 + DOWN*0.5)
        similar_text = Text("Similar", font_size=24, color=GREEN).next_to(triangle4, DOWN)
        
        self.play(Create(triangle1), Create(triangle2))
        self.play(Write(congruent_text))
        self.wait(1)
        self.play(Create(triangle3), Create(triangle4))
        self.play(Write(similar_text))
        self.wait(2)

class TriangleTypesDemo(Scene):
    def construct(self):
        # Equilateral triangle
        equilateral = Polygon([-3, 2, 0], [-2, 1, 0], [-1, 2, 0], color=RED)
        equilateral_label = Text("Equilateral", font_size=20, color=RED).next_to(equilateral, DOWN)
        
        # Isosceles triangle
        isosceles = Polygon([0, 2, 0], [1, 1, 0], [2, 2, 0], color=GREEN)
        isosceles_label = Text("Isosceles", font_size=20, color=GREEN).next_to(isosceles, DOWN)
        
        # Scalene triangle
        scalene = Polygon([-3, -1, 0], [-2, -2, 0], [-1, -1.5, 0], color=YELLOW)
        scalene_label = Text("Scalene", font_size=20, color=YELLOW).next_to(scalene, DOWN)
        
        # Right-angled triangle
        right_triangle = Polygon([1, -1, 0], [2, -2, 0], [1, -2, 0], color=BLUE)
        right_label = Text("Right-angled", font_size=20, color=BLUE).next_to(right_triangle, DOWN)
        
        self.play(Create(equilateral), Write(equilateral_label))
        self.play(Create(isosceles), Write(isosceles_label))
        self.play(Create(scalene), Write(scalene_label))
        self.play(Create(right_triangle), Write(right_label))
        self.wait(2)

class QuadrilateralTypesDemo(Scene):
    def construct(self):
        # Square
        square = Square(side_length=1, color=RED).shift(LEFT*3 + UP*2)
        square_label = Text("Square", font_size=16, color=RED).next_to(square, DOWN)
        
        # Rectangle
        rectangle = Rectangle(width=1.5, height=1, color=GREEN).shift(LEFT*1 + UP*2)
        rectangle_label = Text("Rectangle", font_size=16, color=GREEN).next_to(rectangle, DOWN)
        
        # Kite
        kite = Polygon([1, 2, 0], [2, 1, 0], [1, 0, 0], [0, 1, 0], color=YELLOW)
        kite_label = Text("Kite", font_size=16, color=YELLOW).next_to(kite, DOWN)
        
        # Rhombus
        rhombus = Polygon([-3, -1, 0], [-2, -2, 0], [-1, -1, 0], [-2, 0, 0], color=BLUE)
        rhombus_label = Text("Rhombus", font_size=16, color=BLUE).next_to(rhombus, DOWN)
        
        # Parallelogram
        parallelogram = Polygon([0, -1, 0], [1, -2, 0], [2, -1, 0], [1, 0, 0], color=PURPLE)
        parallelogram_label = Text("Parallelogram", font_size=16, color=PURPLE).next_to(parallelogram, DOWN)
        
        # Trapezium
        trapezium = Polygon([-3, -3, 0], [-1, -3, 0], [0, -4, 0], [-2, -4, 0], color=ORANGE)
        trapezium_label = Text("Trapezium", font_size=16, color=ORANGE).next_to(trapezium, DOWN)
        
        self.play(Create(square), Write(square_label))
        self.play(Create(rectangle), Write(rectangle_label))
        self.play(Create(kite), Write(kite_label))
        self.play(Create(rhombus), Write(rhombus_label))
        self.play(Create(parallelogram), Write(parallelogram_label))
        self.play(Create(trapezium), Write(trapezium_label))
        self.wait(2)

class PolygonNetDemo(Scene):
    def construct(self):
        # Regular polygons
        pentagon = RegularPolygon(n=5, color=RED).shift(LEFT*3 + UP*1)
        pentagon_label = Text("Pentagon", font_size=16, color=RED).next_to(pentagon, DOWN)
        
        hexagon = RegularPolygon(n=6, color=GREEN).shift(RIGHT*0 + UP*1)
        hexagon_label = Text("Hexagon", font_size=16, color=GREEN).next_to(hexagon, DOWN)
        
        octagon = RegularPolygon(n=8, color=BLUE).shift(RIGHT*3 + UP*1)
        octagon_label = Text("Octagon", font_size=16, color=BLUE).next_to(octagon, DOWN)
        
        # Net of a cube
        net_points = [
            [-2, -2, 0], [0, -2, 0], [0, 0, 0], [-2, 0, 0], [-2, -2, 0],  # Square 1
            [0, -2, 0], [2, -2, 0], [2, 0, 0], [0, 0, 0],  # Square 2
            [-2, 0, 0], [0, 0, 0], [0, 2, 0], [-2, 2, 0], [-2, 0, 0],  # Square 3
            [0, 0, 0], [2, 0, 0], [2, 2, 0], [0, 2, 0], [0, 0, 0],  # Square 4
            [-2, 2, 0], [0, 2, 0], [0, 4, 0], [-2, 4, 0], [-2, 2, 0],  # Square 5
            [0, 2, 0], [2, 2, 0], [2, 4, 0], [0, 4, 0], [0, 2, 0]   # Square 6
        ]
        cube_net = Polygon(*net_points, color=YELLOW).scale(0.3).shift(DOWN*2)
        net_label = Text("Cube Net", font_size=16, color=YELLOW).next_to(cube_net, DOWN)
        
        self.play(Create(pentagon), Write(pentagon_label))
        self.play(Create(hexagon), Write(hexagon_label))
        self.play(Create(octagon), Write(octagon_label))
        self.play(Create(cube_net), Write(net_label))
        self.wait(2)