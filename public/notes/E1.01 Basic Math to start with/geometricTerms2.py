# graphs.py
from manim import *
import math

class PolygonTypesDemo(Scene):
    def construct(self):
        # Regular polygons
        pentagon = RegularPolygon(n=5, color=RED).shift(LEFT*3 + UP*1)
        pentagon_label = Text("Pentagon (5 sides)", font_size=16, color=RED).next_to(pentagon, DOWN)
        
        hexagon = RegularPolygon(n=6, color=GREEN).shift(RIGHT*0 + UP*1)
        hexagon_label = Text("Hexagon (6 sides)", font_size=16, color=GREEN).next_to(hexagon, DOWN)
        
        octagon = RegularPolygon(n=8, color=BLUE).shift(RIGHT*3 + UP*1)
        octagon_label = Text("Octagon (8 sides)", font_size=16, color=BLUE).next_to(octagon, DOWN)
        
        # Irregular polygon
        irregular_points = [[-2, -2, 0], [0, -3, 0], [2, -2, 0], [1, -1, 0], [-1, -1, 0]]
        irregular = Polygon(*irregular_points, color=YELLOW).shift(DOWN*1)
        irregular_label = Text("Irregular Polygon", font_size=16, color=YELLOW).next_to(irregular, DOWN)
        
        self.play(Create(pentagon), Write(pentagon_label))
        self.play(Create(hexagon), Write(hexagon_label))
        self.play(Create(octagon), Write(octagon_label))
        self.play(Create(irregular), Write(irregular_label))
        self.wait(2)

class SolidShapesDemo(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        
        # Cube
        cube = Cube(side_length=1, fill_opacity=0.5, fill_color=RED, stroke_color=RED).shift(LEFT*2 + UP*1 + OUT*0)
        cube_label = Text("Cube", font_size=16, color=RED).to_corner(UL)
        
        # Cylinder
        cylinder = Cylinder(radius=0.5, height=1, fill_opacity=0.5, fill_color=GREEN, stroke_color=GREEN).shift(RIGHT*2 + UP*1 + OUT*0)
        cylinder_label = Text("Cylinder", font_size=16, color=GREEN).next_to(cube_label, DOWN)
        
        # Sphere
        sphere = Sphere(radius=0.5, fill_opacity=0.5, fill_color=BLUE, stroke_color=BLUE).shift(LEFT*2 + DOWN*1 + OUT*0)
        sphere_label = Text("Sphere", font_size=16, color=BLUE).next_to(cylinder_label, DOWN)
        
        # Cone
        cone = Cone(base_radius=0.5, height=1, fill_opacity=0.5, fill_color=YELLOW, stroke_color=YELLOW).shift(RIGHT*2 + DOWN*1 + OUT*0)
        cone_label = Text("Cone", font_size=16, color=YELLOW).next_to(sphere_label, DOWN)
        
        self.play(Create(cube), Write(cube_label))
        self.play(Create(cylinder), Write(cylinder_label))
        self.play(Create(sphere), Write(sphere_label))
        self.play(Create(cone), Write(cone_label))
        self.wait(2)

class CirclePartsDemo(Scene):
    def construct(self):
        # Create circle
        circle = Circle(radius=2, color=WHITE)
        center = Dot(color=RED)
        center_label = Text("Centre", font_size=16, color=RED).next_to(center, DOWN)
        
        # Radius
        radius_line = Line(center.get_center(), circle.point_at_angle(0), color=BLUE)
        radius_label = Text("Radius", font_size=16, color=BLUE).next_to(radius_line, RIGHT)
        
        # Diameter
        diameter_line = Line(circle.point_at_angle(PI), circle.point_at_angle(0), color=GREEN)
        diameter_label = Text("Diameter", font_size=16, color=GREEN).next_to(diameter_line, UP)
        
        # Chord
        chord_start = circle.point_at_angle(PI/4)
        chord_end = circle.point_at_angle(3*PI/4)
        chord = Line(chord_start, chord_end, color=YELLOW)
        chord_label = Text("Chord", font_size=16, color=YELLOW).next_to(chord, LEFT)
        
        # Tangent
        tangent_point = circle.point_at_angle(PI/2)
        tangent = Line(tangent_point + LEFT*2, tangent_point + RIGHT*2, color=PURPLE)
        tangent_label = Text("Tangent", font_size=16, color=PURPLE).next_to(tangent, RIGHT)
        
        self.play(Create(circle), Create(center), Write(center_label))
        self.play(Create(radius_line), Write(radius_label))
        self.play(Create(diameter_line), Write(diameter_label))
        self.play(Create(chord), Write(chord_label))
        self.play(Create(tangent), Write(tangent_label))
        self.wait(2)

class CircleRelationshipsDemo(Scene):
    def construct(self):
        circle = Circle(radius=2, color=WHITE)
        center = Dot(color=RED)
        
        # Major and minor arcs
        arc_minor = Arc(radius=2, start_angle=PI/4, angle=PI/2, color=BLUE)
        arc_minor_label = Text("Minor Arc", font_size=16, color=BLUE).next_to(arc_minor, UP)
        
        arc_major = Arc(radius=2, start_angle=5*PI/4, angle=3*PI/2, color=GREEN)
        arc_major_label = Text("Major Arc", font_size=16, color=GREEN).next_to(arc_major, DOWN)
        
        # Sector
        sector = Sector(outer_radius=2, angle=PI/3, color=YELLOW, fill_opacity=0.3)
        sector_label = Text("Sector", font_size=16, color=YELLOW).next_to(sector, RIGHT)
        
        # Segment
        chord_start = circle.point_at_angle(PI/6)
        chord_end = circle.point_at_angle(5*PI/6)
        chord = Line(chord_start, chord_end, color=ORANGE)
        arc_segment = Arc(radius=2, start_angle=PI/6, angle=2*PI/3, color=ORANGE)
        segment_label = Text("Segment", font_size=16, color=ORANGE).next_to(arc_segment, LEFT)
        
        self.play(Create(circle), Create(center))
        self.play(Create(arc_minor), Write(arc_minor_label))
        self.play(Create(arc_major), Write(arc_major_label))
        self.play(Create(sector), Write(sector_label))
        self.play(Create(chord), Create(arc_segment), Write(segment_label))
        self.wait(2)