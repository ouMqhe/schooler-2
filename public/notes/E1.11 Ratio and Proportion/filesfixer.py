import os
import shutil
import re

def organize_markdown_files():
    # Set your root folder path here
    root_folder = r"C:\Users\Admin\Desktop\SimpleOlevel\math-skwali-app\public\notes\E1.11 Ratio and Proportion"  # Update this path
    
    # Get all markdown files
    markdown_files = [f for f in os.listdir(root_folder) 
                     if f.endswith('.md') and os.path.isfile(os.path.join(root_folder, f))]
    
    print(f"Organizing {len(markdown_files)} markdown files...")
    
    for filename in markdown_files:
        # Create folder name from filename (without .md)
        folder_name = filename[:-3]  # Remove .md extension
        folder_name = re.sub(r'[<>:"/\\|?*]', '', folder_name).strip()
        
        # Create folder path
        dest_folder = os.path.join(root_folder, folder_name)
        os.makedirs(dest_folder, exist_ok=True)
        
        # Copy file
        source = os.path.join(root_folder, filename)
        destination = os.path.join(dest_folder, filename)
        shutil.copy2(source, destination)
        
        print(f"Created {folder_name}/ and copied {filename}")

# Run the function
organize_markdown_files()