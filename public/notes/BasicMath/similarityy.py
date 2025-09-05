# graphs.py
from manim import *
import math

class SimilarTrianglesDemo(Scene):
    def construct(self):
        # Create two similar triangles
        triangle1 = Polygon([-3, 1, 0], [-2, -1, 0], [-1, 1, 0], color=BLUE)
        triangle2 = Polygon([1, 2, 0], [2, -2, 0], [3, 2, 0], color=RED)
        
        # Scale factor calculation
        scale_factor = MathTex(r"k = 2", font_size=24).to_edge(UP)
        
        # Corresponding sides
        side1 = Line(triangle1.get_vertices()[0], triangle1.get_vertices()[1], color=YELLOW)
        side2 = Line(triangle2.get_vertices()[0], triangle2.get_vertices()[1], color=YELLOW)
        
        side1_label = MathTex(r"a", font_size=20, color=YELLOW).next_to(side1, LEFT)
        side2_label = MathTex(r"2a", font_size=20, color=YELLOW).next_to(side2, LEFT)
        
        self.play(Create(triangle1), Create(triangle2))
        self.play(Write(scale_factor))
        self.play(Create(side1), Write(side1_label))
        self.play(Create(side2), Write(side2_label))
        self.wait(2)

class SimilarSolidsDemo(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        
        # Small cube
        cube_small = Cube(side_length=1, fill_opacity=0.5, fill_color=BLUE, stroke_color=BLUE).shift(LEFT*2 + OUT*0)
        
        # Large cube (scale factor 2)
        cube_large = Cube(side_length=2, fill_opacity=0.5, fill_color=RED, stroke_color=RED).shift(RIGHT*2 + OUT*0)
        
        # Labels
        small_label = Text("Volume = 1 unit³", font_size=16, color=BLUE).to_corner(UL)
        large_label = Text("Volume = 8 units³", font_size=16, color=RED).to_corner(UR)
        
        scale_text = MathTex(r"k = 2 \Rightarrow V = k^3 = 8", font_size=24).to_edge(DOWN)
        
        self.play(Create(cube_small), Write(small_label))
        self.play(Create(cube_large), Write(large_label))
        self.play(Write(scale_text))
        self.wait(2)

class TriangleSimilarityProof(Scene):
    def construct(self):
        # Two similar triangles with AA proof
        triangle1 = Polygon([-3, 1, 0], [-2, -1, 0], [-1, 1, 0], color=BLUE)
        triangle2 = Polygon([1, 2, 0], [2, -2, 0], [3, 2, 0], color=RED)
        
        # Mark angles
        angle1 = Angle(Line(triangle1.get_vertices()[0], triangle1.get_vertices()[1]), 
                      Line(triangle1.get_vertices()[0], triangle1.get_vertices()[2]), radius=0.3, color=YELLOW)
        angle2 = Angle(Line(triangle2.get_vertices()[0], triangle2.get_vertices()[1]), 
                      Line(triangle2.get_vertices()[0], triangle2.get_vertices()[2]), radius=0.6, color=YELLOW)
        
        angle_label = MathTex(r"\angle A = \angle A'", font_size=24).to_edge(UP)
        
        self.play(Create(triangle1), Create(triangle2))
        self.play(Create(angle1), Create(angle2))
        self.play(Write(angle_label))
        self.wait(2)

class Symmetry2DDemo(Scene):
    def construct(self):
        # Square with lines of symmetry
        square = Square(side_length=2, color=BLUE)
        
        # Lines of symmetry
        line1 = Line(square.get_vertices()[0], square.get_vertices()[2], color=RED)
        line2 = Line(square.get_vertices()[1], square.get_vertices()[3], color=RED)
        line3 = Line(square.get_center() + UP*math.sqrt(2), square.get_center() + DOWN*math.sqrt(2), color=RED)
        line4 = Line(square.get_center() + LEFT*math.sqrt(2), square.get_center() + RIGHT*math.sqrt(2), color=RED)
        
        symmetry_label = Text("4 lines of symmetry", font_size=24, color=WHITE).to_edge(UP)
        rotational_label = Text("Rotational symmetry order 4", font_size=24, color=WHITE).to_edge(DOWN)
        
        self.play(Create(square))
        self.play(Create(line1), Create(line2), Create(line3), Create(line4))
        self.play(Write(symmetry_label))
        self.play(Write(rotational_label))
        self.wait(2)

class Symmetry3DDemo(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        
        # Cylinder with planes of symmetry
        cylinder = Cylinder(radius=1, height=2, fill_opacity=0.3, fill_color=BLUE, stroke_color=BLUE)
        
        # Planes of symmetry (simplified representation)
        plane1 = Rectangle(width=3, height=3, fill_opacity=0.2, fill_color=RED, stroke_color=RED).rotate(PI/2, RIGHT)
        plane2 = Rectangle(width=3, height=3, fill_opacity=0.2, fill_color=GREEN, stroke_color=GREEN).rotate(PI/2, UP)
        
        symmetry_label = Text("Cylinder: Infinite planes of symmetry", font_size=20, color=WHITE).to_edge(UP)
        
        self.play(Create(cylinder))
        self.play(Create(plane1), Create(plane2))
        self.play(Write(symmetry_label))
        self.wait(2)

class PolygonSymmetryProperties(Scene):
    def construct(self):
        # Regular pentagon
        pentagon = RegularPolygon(n=5, color=BLUE).shift(LEFT*3)
        pentagon_label = Text("5 lines of symmetry\nOrder 5", font_size=16, color=BLUE).next_to(pentagon, DOWN)
        
        # Rectangle
        rectangle = Rectangle(width=2, height=1, color=RED).shift(RIGHT*3)
        rectangle_label = Text("2 lines of symmetry\nOrder 2", font_size=16, color=RED).next_to(rectangle, DOWN)
        
        # Draw lines of symmetry for pentagon
        pentagon_lines = VGroup()
        center = pentagon.get_center()
        for i in range(5):
            angle = i * 2*PI/5
            line = Line(center, center + 1.5 * np.array([math.cos(angle), math.sin(angle), 0]), color=YELLOW)
            pentagon_lines.add(line)
        
        # Draw lines of symmetry for rectangle
        rect_line1 = Line(rectangle.get_center() + UP*0.5, rectangle.get_center() + DOWN*0.5, color=YELLOW)
        rect_line2 = Line(rectangle.get_center() + LEFT*1, rectangle.get_center() + RIGHT*1, color=YELLOW)
        
        self.play(Create(pentagon), Write(pentagon_label))
        self.play(Create(pentagon_lines))
        self.play(Create(rectangle), Write(rectangle_label))
        self.play(Create(rect_line1), Create(rect_line2))
        self.wait(2)