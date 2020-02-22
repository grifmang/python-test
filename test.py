import sys
import json

def main():

	# print(sys.argv)

	for name in sys.argv[1].split(','):
		# sys.stdout.write(name)
		print(name)

	# sys.stdout.flush()

if __name__ == '__main__':
	main()