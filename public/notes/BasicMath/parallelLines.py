# graphs.py
from manim import *

class ParallelLinesDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-3, 5, 1],
            y_range=[-8, 4, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Original line: y = 4x - 1
        original_line = axes.plot(lambda x: 4*x - 1, color=RED, x_range=[-2, 4])
        original_label = MathTex("y = 4x - 1", color=RED).to_corner(UL)
        
        # Point (1, -3)
        point = Dot(axes.coords_to_point(1, -3), color=GREEN)
        point_label = MathTex("(1, -3)", color=GREEN).next_to(point, DOWN)
        
        # Parallel line: y = 4x - 7
        parallel_line = axes.plot(lambda x: 4*x - 7, color=YELLOW, x_range=[-1, 4])
        parallel_label = MathTex("y = 4x - 7", color=YELLOW).to_corner(UR)
        
        # Show gradient is the same
        gradient_text = MathTex(
            r"m_1 = m_2 = 4",
            font_size=28
        ).to_edge(DOWN)
        
        self.play(Create(axes))
        self.play(Create(original_line), Write(original_label))
        self.play(Create(point), Write(point_label))
        self.play(Create(parallel_line), Write(parallel_label))
        self.play(Write(gradient_text))
        self.wait(2)

class PerpendicularLinesDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-3, 5, 1],
            y_range=[-3, 5, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Original line: 2y = 3x + 1 → y = (3/2)x + 1/2
        original_line = axes.plot(lambda x: (3/2)*x + 0.5, color=RED, x_range=[-2, 4])
        original_label = MathTex("2y = 3x + 1", color=RED).to_corner(UL)
        
        # Perpendicular line: gradient = -2/3, through origin for simplicity
        perpendicular_line = axes.plot(lambda x: (-2/3)*x, color=GREEN, x_range=[-3, 3])
        perpendicular_label = MathTex("y = -\\frac{2}{3}x", color=GREEN).to_corner(UR)
        
        # Show gradient relationship
        gradient_text1 = MathTex(
            r"m_1 = \frac{3}{2}",
            font_size=28
        ).next_to(original_label, DOWN)
        
        gradient_text2 = MathTex(
            r"m_2 = -\frac{2}{3}",
            font_size=28
        ).next_to(perpendicular_label, DOWN)
        
        product_text = MathTex(
            r"m_1 \times m_2 = \frac{3}{2} \times -\frac{2}{3} = -1",
            font_size=28
        ).to_edge(DOWN)
        
        # Right angle indicator at intersection
        intersection = axes.coords_to_point(0.6, 1.4)
        right_angle = RightAngle(
            Line(intersection, intersection + LEFT*0.5 + UP*0.5),
            Line(intersection, intersection + RIGHT*0.5 + DOWN*0.5),
            length=0.3,
            color=YELLOW
        )
        
        self.play(Create(axes))
        self.play(Create(original_line), Write(original_label))
        self.play(Create(perpendicular_line), Write(perpendicular_label))
        self.play(Write(gradient_text1), Write(gradient_text2))
        self.play(Write(product_text))
        self.play(Create(right_angle))
        self.wait(2)

class PerpendicularBisectorDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-4, 10, 1],
            y_range=[-3, 9, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Points A(-3, 8) and B(9, -2)
        point_a = Dot(axes.coords_to_point(-3, 8), color=RED)
        point_a_label = MathTex("A(-3, 8)", font_size=20).next_to(point_a, LEFT)
        
        point_b = Dot(axes.coords_to_point(9, -2), color=RED)
        point_b_label = MathTex("B(9, -2)", font_size=20).next_to(point_b, RIGHT)
        
        # Line joining A and B
        line_ab = Line(point_a.get_center(), point_b.get_center(), color=RED)
        line_ab_label = MathTex("AB", font_size=20).next_to(line_ab, UP)
        
        # Midpoint M(3, 3)
        midpoint = Dot(axes.coords_to_point(3, 3), color=GREEN)
        midpoint_label = MathTex("M(3, 3)", font_size=20).next_to(midpoint, UP)
        
        # Perpendicular bisector: y = (6/5)x - 3/5
        bisector_line = axes.plot(lambda x: (6/5)*x - 3/5, color=YELLOW, x_range=[-2, 6])
        bisector_label = MathTex("y = \\frac{6}{5}x - \\frac{3}{5}", font_size=20).to_corner(UR)
        
        # Show calculations
        midpoint_calc = MathTex(
            r"M = \left(\frac{-3 + 9}{2}, \frac{8 + (-2)}{2}\right) = (3, 3)",
            font_size=20
        ).to_edge(UP)
        
        gradient_calc = MathTex(
            r"m_{AB} = \frac{-2 - 8}{9 - (-3)} = \frac{-10}{12} = -\frac{5}{6}",
            font_size=20
        ).next_to(midpoint_calc, DOWN)
        
        perpendicular_gradient = MathTex(
            r"m_{\perp} = \frac{6}{5}",
            font_size=20
        ).next_to(gradient_calc, DOWN)
        
        self.play(Create(axes))
        self.play(Create(point_a), Write(point_a_label))
        self.play(Create(point_b), Write(point_b_label))
        self.play(Create(line_ab), Write(line_ab_label))
        self.play(Create(midpoint), Write(midpoint_label))
        self.play(Write(midpoint_calc))
        self.play(Write(gradient_calc))
        self.play(Write(perpendicular_gradient))
        self.play(Create(bisector_line), Write(bisector_label))
        self.wait(2)