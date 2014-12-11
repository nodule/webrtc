for f in `find . -name '*.fbp' -type f`; do
  filename=$(basename "$f")
  filename="${filename%.*}"
  dirname=`dirname $f`
  fbpx graph ${f} | dot -Tpng -o ${dirname}/${filename}.png
done
