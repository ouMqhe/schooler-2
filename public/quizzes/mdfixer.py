import os
import shutil
import argparse

def organize_markdown_files(directory_path):
    """
    Organize markdown files by creating individual folders for each .md file
    and moving the file into its corresponding folder.
    
    Args:
        directory_path (str): Path to the directory containing markdown files
    """
    # Check if the directory exists
    if not os.path.exists(directory_path):
        print(f"Error: Directory '{directory_path}' does not exist.")
        return False
    
    # Get all markdown files in the directory
    md_files = [f for f in os.listdir(directory_path) 
                if f.endswith('.md') and os.path.isfile(os.path.join(directory_path, f))]
    
    if not md_files:
        print(f"No markdown files found in '{directory_path}'.")
        return False
    
    print(f"Found {len(md_files)} markdown file(s) to process.")
    
    # Process each markdown file
    for md_file in md_files:
        # Create folder name (without .md extension)
        folder_name = os.path.splitext(md_file)[0]
        folder_path = os.path.join(directory_path, folder_name)
        
        # Create the folder if it doesn't exist
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            print(f"Created folder: {folder_name}")
        else:
            print(f"Folder already exists: {folder_name}")
        
        # Define source and destination paths
        source_path = os.path.join(directory_path, md_file)
        destination_path = os.path.join(folder_path, md_file)
        
        # Move the markdown file to the new folder
        try:
            shutil.move(source_path, destination_path)
            print(f"Moved '{md_file}' to '{folder_name}/'")
        except Exception as e:
            print(f"Error moving '{md_file}': {str(e)}")
    
    print("Processing complete!")
    return True

def main():
    """Main function to handle command line arguments and execute the script."""
    parser = argparse.ArgumentParser(
        description="Organize markdown files by creating individual folders for each .md file."
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="Directory containing markdown files (default: current directory)"
    )
    
    args = parser.parse_args()
    
    # Execute the organization function
    organize_markdown_files(args.directory)

if __name__ == "__main__":
    main()