# graphs.py
from manim import *
import math

class MeasuringLinesAngles(Scene):
    def construct(self):
        # Measuring lines
        line = Line(LEFT * 3, RIGHT * 3, color=BLUE)
        line_label = Text("5 cm", font_size=20, color=BLUE).next_to(line, UP)
        
        # Measuring angles
        angle_line1 = Line(ORIGIN, RIGHT * 2, color=RED)
        angle_line2 = Line(ORIGIN, UP * 2, color=RED)
        angle = Angle(angle_line1, angle_line2, radius=0.5, color=GREEN)
        angle_label = MathTex("90^\\circ", font_size=20, color=GREEN).next_to(angle, RIGHT)
        
        # Position elements
        line.shift(UP * 1)
        angle_line1.shift(DOWN * 1 + LEFT * 1)
        angle_line2.shift(DOWN * 1 + LEFT * 1)
        
        self.play(Create(line), Write(line_label))
        self.play(Create(angle_line1), Create(angle_line2), Create(angle), Write(angle_label))
        self.wait(2)

class TriangleConstruction(Scene):
    def construct(self):
        # Side lengths: 5cm, 6cm, 7cm
        base = Line(LEFT * 2, RIGHT * 2, color=BLUE)
        base_label = Text("5 cm", font_size=16, color=BLUE).next_to(base, DOWN)
        
        # Construction arcs
        arc1 = Arc(radius=3, start_angle=0, angle=PI/2, arc_center=base.get_start(), color=GREEN)
        arc2 = Arc(radius=3.5, start_angle=PI/2, angle=PI/2, arc_center=base.get_end(), color=RED)
        
        # Intersection point (third vertex)
        vertex = Dot(color=YELLOW).move_to(arc1.point_from_proportion(0.5))
        vertex_label = Text("Vertex C", font_size=16, color=YELLOW).next_to(vertex, UP)
        
        # Complete triangle
        triangle = Polygon(base.get_start(), base.get_end(), vertex.get_center(), color=WHITE)
        
        self.play(Create(base), Write(base_label))
        self.play(Create(arc1), Create(arc2))
        self.play(Create(vertex), Write(vertex_label))
        self.play(Create(triangle))
        self.wait(2)

class NetsDemonstration(Scene):
    def construct(self):
        # Cube net
        square1 = Square(side_length=1, color=RED).shift(UP * 1)
        square2 = Square(side_length=1, color=RED).shift(LEFT * 1)
        square3 = Square(side_length=1, color=RED).shift(RIGHT * 1)
        square4 = Square(side_length=1, color=RED).shift(DOWN * 1)
        square5 = Square(side_length=1, color=RED).shift(DOWN * 2)
        square6 = Square(side_length=1, color=RED).shift(UP * 2)
        
        net_label = Text("Cube Net", font_size=20, color=WHITE).to_edge(UP)
        
        self.play(Write(net_label))
        self.play(Create(square1), Create(square2), Create(square3), 
                  Create(square4), Create(square5), Create(square6))
        self.wait(2)

class RhombusConstruction(Scene):
    def construct(self):
        # Construct two triangles to form a rhombus
        base = Line(LEFT * 2, RIGHT * 2, color=BLUE)
        
        # First triangle
        arc1 = Arc(radius=2, start_angle=0, angle=PI/2, arc_center=base.get_start(), color=GREEN)
        arc2 = Arc(radius=2, start_angle=PI/2, angle=PI/2, arc_center=base.get_end(), color=RED)
        vertex1 = Dot(color=YELLOW).move_to(arc1.point_from_proportion(0.5))
        triangle1 = Polygon(base.get_start(), base.get_end(), vertex1.get_center(), color=WHITE, fill_opacity=0.3)
        
        # Second triangle (reflected)
        vertex2 = Dot(color=YELLOW).move_to(arc2.point_from_proportion(0.5))
        triangle2 = Polygon(base.get_start(), base.get_end(), vertex2.get_center(), color=WHITE, fill_opacity=0.3)
        
        # Complete rhombus
        rhombus = Polygon(base.get_start(), vertex1.get_center(), base.get_end(), vertex2.get_center(), color=WHITE)
        
        self.play(Create(base))
        self.play(Create(arc1), Create(arc2))
        self.play(Create(vertex1), Create(vertex2))
        self.play(Create(triangle1), Create(triangle2))
        self.play(Create(rhombus))
        self.wait(2)

class ScaleDrawingExample(Scene):
    def construct(self):
        # Real room: 6m x 4m, scale 1:50
        scale_factor = 0.02  # 1:50 scale (1m = 2cm)
        
        # Scaled dimensions
        width = 6 * scale_factor
        height = 4 * scale_factor
        
        # Draw scaled room
        room = Rectangle(width=width, height=height, color=BLUE)
        room_label = Text(f"Scale: 1:50\n6m x 4m room", font_size=16, color=BLUE).next_to(room, DOWN)
        
        # Show scale calculation
        scale_text = MathTex(
            r"6\text{m} \times 0.02 = 0.12\text{m} = 12\text{cm}",
            r"\\4\text{m} \times 0.02 = 0.08\text{m} = 8\text{cm}",
            font_size=20
        ).to_edge(DOWN)
        
        self.play(Create(room), Write(room_label))
        self.play(Write(scale_text))
        self.wait(2)

class BearingsDemonstration(Scene):
    def construct(self):
        # North arrow
        north_arrow = Arrow(ORIGIN, UP * 2, color=RED, buff=0)
        north_label = Text("N", font_size=20, color=RED).next_to(north_arrow, UP)
        
        # Point A
        point_a = Dot(color=BLUE)
        point_a_label = Text("A", font_size=20, color=BLUE).next_to(point_a, DOWN)
        
        # Bearings from A
        bearing_025 = Line(point_a.get_center(), point_a.get_center() + UP * 1.5, color=GREEN)
        bearing_025.rotate(-25 * DEGREES, about_point=point_a.get_center())
        bearing_label_025 = MathTex("025^\\circ", font_size=16, color=GREEN).next_to(bearing_025, RIGHT)
        
        bearing_205 = Line(point_a.get_center(), point_a.get_center() + UP * 1.5, color=YELLOW)
        bearing_205.rotate(205 * DEGREES, about_point=point_a.get_center())
        bearing_label_205 = MathTex("205^\\circ", font_size=16, color=YELLOW).next_to(bearing_205, LEFT)
        
        self.play(Create(north_arrow), Write(north_label))
        self.play(Create(point_a), Write(point_a_label))
        self.play(Create(bearing_025), Write(bearing_label_025))
        self.play(Create(bearing_205), Write(bearing_label_205))
        self.wait(2)

class CompassDirections(Scene):
    def construct(self):
        # Compass rose
        circle = Circle(radius=2, color=WHITE)
        center = Dot(color=RED)
        
        # Cardinal directions
        north = Arrow(ORIGIN, UP * 1.8, color=RED, buff=0)
        north_label = Text("N (000°)", font_size=16, color=RED).next_to(north, UP)
        
        east = Arrow(ORIGIN, RIGHT * 1.8, color=GREEN, buff=0)
        east_label = Text("E (090°)", font_size=16, color=GREEN).next_to(east, RIGHT)
        
        south = Arrow(ORIGIN, DOWN * 1.8, color=BLUE, buff=0)
        south_label = Text("S (180°)", font_size=16, color=BLUE).next_to(south, DOWN)
        
        west = Arrow(ORIGIN, LEFT * 1.8, color=YELLOW, buff=0)
        west_label = Text("W (270°)", font_size=16, color=YELLOW).next_to(west, LEFT)
        
        self.play(Create(circle), Create(center))
        self.play(Create(north), Write(north_label))
        self.play(Create(east), Write(east_label))
        self.play(Create(south), Write(south_label))
        self.play(Create(west), Write(west_label))
        self.wait(2)