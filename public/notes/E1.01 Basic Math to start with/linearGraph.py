# graphs.py
from manim import *

class LinearGraphs(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-2, 6, 1],
            y_range=[-2, 8, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Graph y = -2x + 5
        graph1 = axes.plot(lambda x: -2*x + 5, color=RED)
        graph1_label = MathTex("y = -2x + 5", color=RED).to_corner(UL)
        
        # Graph y = 7 - 4x
        graph2 = axes.plot(lambda x: 7 - 4*x, color=GREEN)
        graph2_label = MathTex("y = 7 - 4x", color=GREEN).next_to(graph1_label, DOWN)
        
        # Graph 3x + 2y = 5 → y = (-3x + 5)/2
        graph3 = axes.plot(lambda x: (-3*x + 5)/2, color=YELLOW)
        graph3_label = MathTex("3x + 2y = 5", color=YELLOW).next_to(graph2_label, DOWN)
        
        self.play(Create(axes))
        self.play(Create(graph1), Write(graph1_label))
        self.wait(1)
        self.play(Create(graph2), Write(graph2_label))
        self.wait(1)
        self.play(Create(graph3), Write(graph3_label))
        self.wait(2)

class LengthMidpointDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(x_range=[0, 5, 1], y_range=[0, 10, 1], x_length=6, y_length=6)
        
        # Points A(1,3) and B(4,9)
        point_a = Dot(axes.coords_to_point(1, 3), color=RED)
        point_b = Dot(axes.coords_to_point(4, 9), color=RED)
        label_a = MathTex("A(1,3)", font_size=24).next_to(point_a, LEFT)
        label_b = MathTex("B(4,9)", font_size=24).next_to(point_b, RIGHT)
        
        # Line segment
        line = Line(point_a.get_center(), point_b.get_center(), color=BLUE)
        
        # Midpoint
        midpoint = Dot(axes.coords_to_point(2.5, 6), color=GREEN)
        midpoint_label = MathTex("M(2.5,6)", font_size=24).next_to(midpoint, DOWN)
        
        # Length calculation visualization
        length_text = MathTex(
            r"\text{Length} = \sqrt{(4-1)^2 + (9-3)^2} = \sqrt{45} = 3\sqrt{5}",
            font_size=28
        ).to_edge(DOWN)
        
        self.play(Create(axes))
        self.play(Create(point_a), Write(label_a))
        self.play(Create(point_b), Write(label_b))
        self.play(Create(line))
        self.play(Create(midpoint), Write(midpoint_label))
        self.play(Write(length_text))
        self.wait(3)