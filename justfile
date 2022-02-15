default:
  just --list

alias f := fmt

fmt:
	prettier --write .
