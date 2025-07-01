cd F:\Paradox_Web\ParadoxTZ.github.io
call hexo clean
call hexo g 

hexo call gulp

call hexo d


call git add -u
call git commit -m 'new'
git push origin hexofile