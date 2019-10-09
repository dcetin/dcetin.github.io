echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
~/.rbenv/bin/rbenv init
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
rbenv local 2.5.1
