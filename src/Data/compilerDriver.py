import courseCompiler

def restructure_JSON(read_file, write_file):
    compiler = courseCompiler(read_file, write_file)
    compiler.restructure()

if __name__ == "__main__":
    restructure_JSON("courses.json", "courseProfs.json")