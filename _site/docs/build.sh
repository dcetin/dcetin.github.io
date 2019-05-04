git clone https://github.com/rbenv/rbenv.git ~/.rbenv
sudo apt-get install gcc
sudo apt install make
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
~/.rbenv/bin/rbenv init
cd ~/.rbenv
git pull
sudo apt install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm5 libgdbm-dev
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
type rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
rbenv install -l
rbenv install 2.5.1
rbenv local 2.5.1
gem install bundler
cd ~/Desktop/dcetin.github.io/
gem install bundler
bundle install
bundle exec jekyll serve