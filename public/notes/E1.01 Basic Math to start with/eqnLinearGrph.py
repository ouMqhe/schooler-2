# graphs.py
from manim import *

class LineEquationFromGraph(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-2, 6, 1],
            y_range=[-2, 6, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Create a line with known points
        line = axes.plot(lambda x: 0.5*x + 2, color=RED, x_range=[-2, 6])
        
        # Mark two points on the line
        point1 = Dot(axes.coords_to_point(0, 2), color=GREEN)
        point1_label = MathTex("(0, 2)", font_size=24).next_to(point1, LEFT)
        
        point2 = Dot(axes.coords_to_point(4, 4), color=GREEN)
        point2_label = MathTex("(4, 4)", font_size=24).next_to(point2, RIGHT)
        
        # Show gradient calculation
        gradient_text = MathTex(
            r"m = \frac{4 - 2}{4 - 0} = \frac{2}{4} = \frac{1}{2}",
            font_size=28
        ).to_edge(UP)
        
        # Show equation
        equation_text = MathTex(
            r"y = \frac{1}{2}x + 2",
            font_size=32
        ).to_edge(DOWN)
        
        self.play(Create(axes))
        self.play(Create(line))
        self.play(Create(point1), Write(point1_label))
        self.play(Create(point2), Write(point2_label))
        self.play(Write(gradient_text))
        self.wait(1)
        self.play(Write(equation_text))
        self.wait(2)

class GradientInterceptDemo(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-2, 6, 1],
            y_range=[-2, 6, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Graph the equation 5x + 4y = 8
        line = axes.plot(lambda x: (-5*x + 8)/4, color=RED, x_range=[-2, 6])
        
        # Show the original equation
        original_eq = MathTex("5x + 4y = 8", font_size=32).to_edge(UP)
        
        # Show conversion to slope-intercept form
        conversion_step1 = MathTex("4y = -5x + 8", font_size=28).next_to(original_eq, DOWN)
        conversion_step2 = MathTex("y = -\\frac{5}{4}x + 2", font_size=28).next_to(conversion_step1, DOWN)
        
        # Highlight gradient and intercept
        gradient_box = SurroundingRectangle(conversion_step2[0][5:10], color=YELLOW)
        intercept_box = SurroundingRectangle(conversion_step2[0][11:], color=GREEN)
        
        gradient_label = MathTex("\\text{Gradient} = -\\frac{5}{4}", font_size=24).next_to(gradient_box, RIGHT)
        intercept_label = MathTex("\\text{Y-intercept} = 2", font_size=24).next_to(intercept_box, RIGHT)
        
        self.play(Create(axes))
        self.play(Create(line))
        self.play(Write(original_eq))
        self.wait(1)
        self.play(Write(conversion_step1))
        self.wait(1)
        self.play(Write(conversion_step2))
        self.wait(1)
        self.play(Create(gradient_box), Write(gradient_label))
        self.wait(1)
        self.play(Create(intercept_box), Write(intercept_label))
        self.wait(2)

class DifferentLineForms(Scene):
    def construct(self):
        # Create axes
        axes = Axes(
            x_range=[-2, 6, 1],
            y_range=[-2, 6, 1],
            x_length=8,
            y_length=6,
            axis_config={"color": BLUE},
        )
        
        # Different types of lines
        horizontal_line = axes.plot(lambda x: 3, color=RED, x_range=[-2, 6])
        horizontal_label = MathTex("y = 3", font_size=24).next_to(axes.coords_to_point(5, 3), UP)
        
        vertical_line = Line(
            axes.coords_to_point(2, -2),
            axes.coords_to_point(2, 6),
            color=GREEN
        )
        vertical_label = MathTex("x = 2", font_size=24).next_to(axes.coords_to_point(2, 5), RIGHT)
        
        diagonal_line = axes.plot(lambda x: 0.5*x + 1, color=YELLOW, x_range=[-2, 6])
        diagonal_label = MathTex("y = \\frac{1}{2}x + 1", font_size=24).next_to(axes.coords_to_point(4, 3), UP)
        
        self.play(Create(axes))
        self.play(Create(horizontal_line), Write(horizontal_label))
        self.wait(1)
        self.play(Create(vertical_line), Write(vertical_label))
        self.wait(1)
        self.play(Create(diagonal_line), Write(diagonal_label))
        self.wait(2)