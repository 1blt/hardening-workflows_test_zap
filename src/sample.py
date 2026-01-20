# Sample Python file for CodeQL analysis testing
# Contains intentional security issues for testing purposes

import subprocess
import os


def unsafe_command_execution(user_input):
    """Intentional command injection vulnerability for testing."""
    # CodeQL should flag this as a command injection vulnerability
    subprocess.call(user_input, shell=True)


def unsafe_sql_query(user_id):
    """Intentional SQL injection vulnerability for testing."""
    # CodeQL should flag this as SQL injection
    query = "SELECT * FROM users WHERE id = " + user_id
    return query


def unsafe_file_read(filename):
    """Intentional path traversal vulnerability for testing."""
    # CodeQL should flag this as path traversal
    with open("/data/" + filename, "r") as f:
        return f.read()


if __name__ == "__main__":
    # Test code - not meant to be run
    pass
