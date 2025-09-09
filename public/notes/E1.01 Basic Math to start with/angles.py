# graphs.py
from manim import *
import math

class BasicAngleProperties(Scene):
    def construct(self):
        # Angles at a point
        center = Dot(color=BLUE)
        angles_at_point = VGroup()
        angles = [0, 45, 135, 270]  # Angles in degrees
        colors = [RED, GREEN, YELLOW, PURPLE]
        for i, angle in enumerate(angles):
            line = Line(center.get_center(), center.get_center() + 2 * np.array([math.cos(angle*DEGREES), math.sin(angle*DEGREES), 0]), color=colors[i])
            angles_at_point.add(line)
        point_label = MathTex(r"360^\circ", font_size=24, color=WHITE).next_to(center, UP)
        
        # Angles on a straight line
        line = Line(LEFT*3, RIGHT*3, color=BLUE)
        angle1 = Angle(Line(ORIGIN, LEFT), Line(ORIGIN, UP), radius=0.5, color=RED).shift(LEFT*1.5)
        angle2 = Angle(Line(ORIGIN, UP), Line(ORIGIN, RIGHT), radius=0.5, color=GREEN).shift(LEFT*1.5)
        line_label = MathTex(r"180^\circ", font_size=24, color=WHITE).next_to(line, DOWN)
        
        # Vertically opposite angles
        line1 = Line(LEFT*0.5 + UP*0.5, RIGHT*0.5 + DOWN*0.5, color=YELLOW).shift(RIGHT*3 + UP*1)
        line2 = Line(LEFT*0.5 + DOWN*0.5, RIGHT*0.5 + UP*0.5, color=YELLOW).shift(RIGHT*3 + UP*1)
        intersection = Dot(color=BLUE).shift(RIGHT*3 + UP*1)
        angle_v1 = Angle(line1, line2, radius=0.3, color=RED, other_angle=False)
        angle_v2 = Angle(line1, line2, radius=0.3, color=RED, other_angle=True)
        vo_label = MathTex(r"\theta = \theta", font_size=24, color=RED).next_to(intersection, DOWN)
        
        self.play(Create(center), Create(angles_at_point), Write(point_label))
        self.play(Create(line), Create(angle1), Create(angle2), Write(line_label))
        self.play(Create(line1), Create(line2), Create(intersection), Create(angle_v1), Create(angle_v2), Write(vo_label))
        self.wait(2)

class ParallelLinesAngles(Scene):
    def construct(self):
        # Parallel lines
        line1 = Line(LEFT*3, RIGHT*3, color=BLUE).shift(UP*1)
        line2 = Line(LEFT*3, RIGHT*3, color=BLUE).shift(DOWN*1)
        transversal = Line(LEFT*2 + UP*2, RIGHT*2 + DOWN*2, color=RED)
        
        # Corresponding angles (F shape)
        angle1 = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.3, color=GREEN).shift(LEFT*1 + UP*1)
        angle2 = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.3, color=GREEN).shift(LEFT*1 + DOWN*1)
        corr_label = MathTex(r"\alpha = \alpha", font_size=20, color=GREEN).next_to(angle2, DOWN)
        
        # Alternate angles (Z shape)
        angle3 = Angle(Line(ORIGIN, LEFT), Line(ORIGIN, DOWN), radius=0.3, color=YELLOW).shift(RIGHT*1 + UP*1)
        angle4 = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.3, color=YELLOW).shift(RIGHT*1 + DOWN*1)
        alt_label = MathTex(r"\beta = \beta", font_size=20, color=YELLOW).next_to(angle4, DOWN)
        
        # Co-interior angles (C shape)
        angle5 = Angle(Line(ORIGIN, LEFT), Line(ORIGIN, UP), radius=0.3, color=PURPLE).shift(LEFT*0.5 + UP*1)
        angle6 = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, DOWN), radius=0.3, color=PURPLE).shift(LEFT*0.5 + DOWN*1)
        coint_label = MathTex(r"\gamma + \delta = 180^\circ", font_size=20, color=PURPLE).next_to(angle6, DOWN)
        
        self.play(Create(line1), Create(line2), Create(transversal))
        self.play(Create(angle1), Create(angle2), Write(corr_label))
        self.play(Create(angle3), Create(angle4), Write(alt_label))
        self.play(Create(angle5), Create(angle6), Write(coint_label))
        self.wait(2)

class PolygonAngleProperties(Scene):
    def construct(self):
        # Regular pentagon
        pentagon = RegularPolygon(n=5, color=BLUE)
        center = Dot(color=RED)
        
        # Interior angles
        int_angle = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.5, color=GREEN).shift(pentagon.get_center())
        int_label = MathTex(r"108^\circ", font_size=20, color=GREEN).next_to(int_angle, UP)
        
        # Exterior angles
        ext_angle = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.7, color=RED, other_angle=True).shift(pentagon.get_center())
        ext_label = MathTex(r"72^\circ", font_size=20, color=RED).next_to(ext_angle, UR)
        
        # Angle sum formulas
        sum_int = MathTex(r"(5-2) \times 180^\circ = 540^\circ", font_size=24, color=BLUE).to_edge(DOWN)
        sum_ext = MathTex(r"5 \times 72^\circ = 360^\circ", font_size=24, color=RED).next_to(sum_int, UP)
        
        self.play(Create(pentagon), Create(center))
        self.play(Create(int_angle), Write(int_label))
        self.play(Create(ext_angle), Write(ext_label))
        self.play(Write(sum_int), Write(sum_ext))
        self.wait(2)

class AngleNotationExamples(Scene):
    def construct(self):
        # Triangle with three-letter notation
        triangle = Polygon([-2, -1, 0], [2, -1, 0], [0, 2, 0], color=BLUE)
        vertices = [Dot(color=RED).move_to(triangle.get_vertices()[i]) for i in range(3)]
        labels = [MathTex("A", font_size=20, color=RED).next_to(vertices[0], DL),
                 MathTex("B", font_size=20, color=RED).next_to(vertices[1], DR),
                 MathTex("C", font_size=20, color=RED).next_to(vertices[2], UP)]
        
        # Angle ABC
        angle_abc = Angle(Line(vertices[1].get_center(), vertices[0].get_center()),
                         Line(vertices[1].get_center(), vertices[2].get_center()), radius=0.5, color=GREEN)
        abc_label = MathTex(r"\angle ABC", font_size=20, color=GREEN).next_to(angle_abc, RIGHT)
        
        # Angle BAC
        angle_bac = Angle(Line(vertices[0].get_center(), vertices[1].get_center()),
                         Line(vertices[0].get_center(), vertices[2].get_center()), radius=0.5, color=YELLOW)
        bac_label = MathTex(r"\angle BAC", font_size=20, color=YELLOW).next_to(angle_bac, UL)
        
        self.play(Create(triangle), *[Create(v) for v in vertices], *[Write(l) for l in labels])
        self.play(Create(angle_abc), Write(abc_label))
        self.play(Create(angle_bac), Write(bac_label))
        self.wait(2)

class ComplexAngleProblem(Scene):
    def construct(self):
        # Complex diagram with multiple angles to find
        # Parallel lines
        line1 = Line(LEFT*3, RIGHT*3, color=BLUE).shift(UP*1)
        line2 = Line(LEFT*3, RIGHT*3, color=BLUE).shift(DOWN*1)
        transversal = Line(LEFT*2 + UP*2, RIGHT*2 + DOWN*2, color=RED)
        
        # Various angles
        angles = []
        angle_positions = [LEFT*1 + UP*1, RIGHT*1 + UP*1, LEFT*1 + DOWN*1, RIGHT*1 + DOWN*1]
        angle_values = [MathTex("60^\circ", font_size=16), MathTex("120^\circ", font_size=16), 
                       MathTex("60^\circ", font_size=16), MathTex("120^\circ", font_size=16)]
        colors = [GREEN, YELLOW, GREEN, YELLOW]
        
        for i, pos in enumerate(angle_positions):
            angle = Angle(Line(ORIGIN, RIGHT), Line(ORIGIN, UP), radius=0.3, color=colors[i]).shift(pos)
            angles.append(angle)
            angle_values[i].next_to(angle, DOWN if i<2 else UP)
        
        # Reasoning text
        reason1 = Text("Corresponding angles equal", font_size=16, color=GREEN).to_edge(DOWN)
        reason2 = Text("Alternate angles equal", font_size=16, color=YELLOW).next_to(reason1, UP)
        
        self.play(Create(line1), Create(line2), Create(transversal))
        self.play(*[Create(angle) for angle in angles], *[Write(val) for val in angle_values])
        self.play(Write(reason1), Write(reason2))
        self.wait(2)